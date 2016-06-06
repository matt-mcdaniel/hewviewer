var fs = require('fs');
var express = require('express');
var _ = require('lodash');
var path = require('path');

const app = new express();
const port = 3000;

var filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, data) {
	if (err) return console.log(err);

	write(data);
});

const wrap = (start, str, end) => {
	return start + str + end;
}

const replace = (str) => {
	const arr = str.match(/#[\da-zA-Z]{6}/gi);

	const replaced = _.map(arr, (hex) => {
		return wrap(`<div style="background-color:${hex}">`, hex, `</div>`);
	});

	return replaced.join('\n');
}

const write = (str) => {
	const lastCurried = _.curry((filename, char) => _.lastIndexOf(filename, char))(filename);

	const outputFilename = _.join(_.slice(filename, lastCurried('/') + 1, lastCurried('.')), '');

	const output = replace(wrap(
		'<!doctype html><html lang="en"><head><title>Hex Preview</title></head><body>',
		str,
		'</body><html>'
	));

	fs.writeFile('./' + outputFilename + '.html', output, (err) => {
		if (err) console.log(err);

		app.get('/', (req, res) => {
			res.sendFile(path.join(__dirname, outputFilename + '.html'));
		});

		app.listen(port, (error) => {
			if (err) return console.warn(err);

			console.info(
				'🌎  Listening on port %s, available at http://localhost:%s/.',
				port,
				port
			);
		})
	})
}