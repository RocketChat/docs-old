import { execSync } from 'child_process';
import {promises as fs} from 'fs';
import path from 'path';

const BASE_PATH = process.env.BASE_PATH || '../../';
const SUMMARY_PATH = process.env.SUMMARY_PATH || 'SUMMARY.md';

process.chdir(BASE_PATH);

const ignoreDirs = [
	'.git',
	'.scripts',
	'.github',
	'.travis'
];

const ignoreFiles = [
	'SUMMARY.md'
];

function execSyncIgnoringExitCode(command: string): string | Error {
	try {
		return execSync(command).toString();
	} catch (error) {
		const result = error.stdout.toString();
		if (result.startsWith('error: Could not access')) {
			console.log(result);
			return new Error;
		}
		return result;
	}
}

async function recFindByExt(basePath: string, ext: string): Promise<string[]> {
	if (ignoreDirs.includes(basePath)) {
		return [];
	}

	try {
		const ls = await fs.readdir(basePath, {withFileTypes: true});

		const files = ls.filter((item) => item.isFile() && item.name.endsWith(ext) && !ignoreFiles.includes(item.name)).map((file) => path.join(basePath, file.name));
		const directories = ls.filter((item) => item.isDirectory());

		for (const directory of directories) {
			files.push(...await recFindByExt(path.join(basePath, directory.name), ext));
		}

		return files;
	} catch (error) {
		console.warn(error);
		return [];
	}
}

export async function init(): Promise<void> {
	const summary = await (await fs.readFile(SUMMARY_PATH)).toString();

	const links = summary.match(/[^(]+\.md/g) || [];

	for await (const link of links) {
		try {
			await fs.stat(link);
		} catch (error) {
			console.warn(`SUMMARY.md file [${link}] doesn't exists`);
		}
	}

	const allFiles = await recFindByExt('.', '.md');

	const filesNotInSummary = allFiles.filter((file) => !links.includes(file));

	const checksums = new Map<string, string>();

	const filesNotInSummaryAndDuplicated = [];
	const filesInSummaryAndDuplicated = [];

	for (const file of allFiles) {
		let command = `md5 -q ${file}`;
		if (process.platform === 'linux') {
			command = `printf $(md5sum ${file})`;
		}

		const checksum = execSync(command).toString().replace('\n', '');

		if (checksums.has(checksum)) {
			const detail = `• ${file}\n↳ ${checksums.get(checksum)}`;

			if (filesNotInSummary.includes(file)) {
				filesNotInSummaryAndDuplicated.push(file)
			} else if (filesNotInSummary.includes(checksums.get(checksum) || '')) {
				filesNotInSummaryAndDuplicated.push(checksums.get(checksum))
			} else {
				filesInSummaryAndDuplicated.push(detail)
			}
		} else {
			checksums.set(checksum, file);
		}
	}

	const filesWithPathDiffsOnly = [];
	const filesNotInSummaryWithSingleDuplicate = [];
	const filesNotInSummaryWithMultipleDuplicates = [];
	const filesNotInSummaryWithoutDuplicates = [];

	for (const file of filesNotInSummary) {
		if (filesNotInSummaryAndDuplicated.includes(file)) {
			continue;
		}

		const fileName = path.parse(file).base;
		const fileDir = file.split('/').slice(-2).join('/');

		let filesWithSameName = allFiles.filter((f) => !filesNotInSummary.includes(f) && fileName === path.parse(f).base);

		if (fileName === 'README.md' || filesWithSameName.length > 1) {
			const filesWithSameNameAndDir = allFiles.filter((f) => !filesNotInSummary.includes(f) && fileDir === f.split('/').slice(-2).join('/'));
			if (fileName === 'README.md' || filesWithSameNameAndDir.length) {
				filesWithSameName = filesWithSameNameAndDir;
			}
		}

		if (filesWithSameName.length === 1) {
			const command = `git diff -b --no-index --ignore-blank-lines --word-diff-regex=. --word-diff=porcelain --summary -U0 "${file}" "${filesWithSameName[0]}"`;

			const result = execSyncIgnoringExitCode(command);
			if (result instanceof Error) {
				continue;
			}

			const changes = result.split('\n')
				.splice(4)
				.filter(i => (i.startsWith('-') || i.startsWith('+')) && !i.match(/^(-|\+)(\.\.?\/\.?)+$/))
				.join('\n');

			if (changes.length) {
				filesWithPathDiffsOnly.push(file);
			}
		}

		if (!filesWithPathDiffsOnly.includes(file) && filesWithSameName.length === 1) {
			filesNotInSummaryWithSingleDuplicate.push(`cp ${filesWithSameName[0]} ${file}`);
		}

		if (!filesWithPathDiffsOnly.includes(file) && filesWithSameName.length > 1) {
			filesNotInSummaryWithMultipleDuplicates.push(`${file}\n${filesWithSameName.map((i) => {
				const result = execSyncIgnoringExitCode(`git diff --no-index --exit-code --shortstat ${file} ${i}`);
				if (!(result instanceof Error)) {
					i = result.replace(/\n$/, '').replace(/\s*\d+ file changed,/, '') + '  '+ i;
				}
				return '  -> ' + i;
			}).join('\n')}\n`);
		}

		if (!filesWithPathDiffsOnly.includes(file) && !filesWithSameName.length) {
			filesNotInSummaryWithoutDuplicates.push(file);
		}
	}

	console.log(`\n=== ${filesNotInSummaryAndDuplicated.length} files not in Summary and duplicated (safe to remove) ===\n`);
	console.log(filesNotInSummaryAndDuplicated.map((i) => 'rm '+i).join('\n'));

	console.log(`\n=== ${filesWithPathDiffsOnly.length} files not in Summary and with diffs in paths only (safe to remove) ===\n`);
	console.log(filesWithPathDiffsOnly.map((i) => 'rm '+i).join('\n'));

	console.log(`\n=== ${filesInSummaryAndDuplicated.length} files in Summary and duplicated ===\n`);
	console.log(filesInSummaryAndDuplicated.join('\n'));

	console.log(`\n=== ${filesNotInSummaryWithSingleDuplicate.length} other files not in Summary with single duplicate identified (copy new over old to compare) ===\n`);
	console.log(filesNotInSummaryWithSingleDuplicate.join('\n'));

	console.log(`\n=== ${filesNotInSummaryWithMultipleDuplicates.length} other files not in Summary with multiple duplicates identified ===\n`);
	console.log(filesNotInSummaryWithMultipleDuplicates.join('\n'));

	console.log(`\n=== ${filesNotInSummaryWithoutDuplicates.length} other files not in Summary ===\n`);
	console.log(filesNotInSummaryWithoutDuplicates.join('\n'));

	if (filesNotInSummary.length) {
		process.exit(1);
	}
}

init();