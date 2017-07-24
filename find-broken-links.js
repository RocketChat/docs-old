// List all files in a directory in Node.js recursively in a synchronous fashion
var fs = require('fs');
var path = require('path');

 function walkSync(dir, cbFile) {
	files = fs.readdirSync(dir);

	files.forEach(function(file) {
		file = path.join(dir, file);
		if (fs.statSync(file).isDirectory()) {
			walkSync(file, cbFile);
		} else {
			cbFile(file);
		}
	});
};

walkSync(__dirname, function(file) {
	if (/\.md$/.test(file) === false) {
		return;
	}

	var text = fs.readFileSync(file).toString();

	var links = [];

	// text.replace(/\[(.*?)\]\((.*?)\)/gm, function(link, text, url) {
	// 	if (/^https?:\/\/.+/.test(url)) {
	// 		// TODO
	// 	} else if (/mailto:.+/.test(url)) {
	// 		// TODO
	// 	} else if (/#.+/.test(url)) {
	// 		// TODO
	// 	} else {
	// 		// console.log(url);
	// 		url = decodeURIComponent(url);
	// 		if (/^\//.test(url)) {
	// 			var link2 = path.join(__dirname, url)
	// 		} else {
	// 			var link2 = path.join(path.dirname(file), url)
	// 		}
	// 		try {
	// 			fs.statSync(link2)
	// 		} catch (error) {
	// 			links.push(url);
	// 		}
	// 	}
	// })

	text.replace(/\[(\d+)\]:(.+)/gm, function(link, text, url) {
		// [3]:../13.%20Update%20Message
		// console.log(url);
		url = decodeURIComponent(url);
		if (/^\//.test(url)) {
			var link2 = path.join(__dirname, url)
		} else {
			var link2 = path.join(path.dirname(file), url)
		}
		try {
			fs.statSync(link2)
		} catch (error) {
			links.push(url);
		}
	});

	if (links.length) {
		console.log(file);
		links.forEach(function(link) {
			console.log('  ', link);
		});
		console.log();
	}
});
