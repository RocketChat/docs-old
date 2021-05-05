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

async function recFindByExt(basePath: string, ext: string): Promise<string[]> {
	if (ignoreDirs.includes(basePath)) {
		return [];
	}

	try {
		const ls = await fs.readdir(basePath, {withFileTypes: true});

		const files = ls.filter((item) => item.isFile() && item.name.endsWith(ext)).map((file) => path.join(basePath, file.name));
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

	const files = await recFindByExt('.', '.md');

	const filesNotInSummary = files.filter((file) => !links.includes(file));

	const checksums = new Map<string, string>();

	const filesNotInSummaryAndDuplicated = [];
	const filesInSummaryAndDuplicated = [];

	for (const file of files) {
		const checksum = execSync(`md5 -q ${file}`).toString().replace('\n', '');

		if (checksums.has(checksum)) {
			const detail = `• ${file}\n↳ ${checksums.get(checksum)}`;

			if (filesNotInSummary.includes(file)) {
				filesNotInSummaryAndDuplicated.push(detail)
			} else if (!filesNotInSummary.includes(checksums.get(checksum) || '')) {
				filesInSummaryAndDuplicated.push(detail)
			}
		} else {
			checksums.set(checksum, file);
		}
	}

	console.log(`\n=== ${filesNotInSummary.length} files not in Summary ===\n`);
	console.log(filesNotInSummary.join('\n'));

	console.log(`\n=== ${filesNotInSummaryAndDuplicated.length} files not in Summary and duplicated ===\n`);
	console.log(filesNotInSummaryAndDuplicated.join('\n'));

	console.log(`\n=== ${filesInSummaryAndDuplicated.length} files in Summary and duplicated ===\n`);
	console.log(filesInSummaryAndDuplicated.join('\n'));

	if (filesNotInSummary.length) {
		process.exit(1);
	}
}

init();