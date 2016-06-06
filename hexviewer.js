var fs = require('fs');
var path = require('path');
var express = require('express');
var _ = require('lodash');

const app = new express();
const port = 3000;

const filename = process.argv[2];

const lastCurried = _.curry((filename, char) => _.lastIndexOf(filename, char))(filename);

const outputFilename = process.argv[3] ? process.argv[3] :
	(_.join(_.slice(filename, lastCurried('/') + 1, lastCurried('.')), ''));

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
		return wrap(
			`<div style="background-color:${hex};padding:15px;">
			<div style="display:inline;background-color:#fff;padding:5px;">`,
			hex,
			`</div></div>`
		);
	});

	return replaced.join('\n');
}

const write = (str) => {

	const output = replace(wrap(
		'<!doctype html><html lang="en"><head><title>Hex Preview</title></head><body>',
		str,
		'</body><html>'
	));

	app.get('/*', (req, res) => {
		res.send(output);
	});

	app.listen(port, (err) => {
		if (err) return console.warn(err);

		console.info(
			'🌎  Listening on port %s, available at http://localhost:%s/.',
			port,
			port
		);
	});
}