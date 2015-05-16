'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');
var pkg = require('../package.json');
var url = 'https://raw.github.com/' + pkg.repository + '/v' + pkg.version + '/vendor/';

module.exports.zip = new BinWrapper()
/*	.src(url + 'osx/zip', 'darwin')
	.src(url + 'linux/zip', 'linux')*/
	.src(url + 'win/zip.exe', 'win32')
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'zip.exe' : 'zip');

module.exports.unzip = new BinWrapper()
	/*	.src(url + 'osx/unzip', 'darwin')
	 .src(url + 'linux/unzip', 'linux')*/
	.src(url + 'win/unzip.exe', 'win32')
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'unzip.exe' : 'zip');
