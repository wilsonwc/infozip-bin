'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');
var which = require('npm-which')('/');
var pkg = require('../package.json');
var url = 'https://raw.githubusercontent.com/wilsonwc/infozip-bin/v' + pkg.version + '/vendor/';

var zipBinary = which.sync('zip');
var unzipBinary = which.sync('unzip');

if(zipBinary){
	module.exports.zip = new BinWrapper().dest('').use(zipBinary);
}else {
	module.exports.zip = new BinWrapper()
		.src(url + 'osx/zip', 'darwin')
		.src(url + 'linux/zip', 'linux')
		.src(url + 'win/zip.exe', 'win32')
		.dest(path.join(__dirname, '../vendor'))
		.use(process.platform === 'win32' ? 'zip.exe' : 'zip');
}
if(unzipBinary){
	module.exports.unzip = new BinWrapper().dest('').use(unzipBinary);
}else {
	module.exports.unzip = new BinWrapper()
		.src(url + 'osx/unzip', 'darwin')
		.src(url + 'linux/unzip', 'linux')
		.src(url + 'win/unzip.exe', 'win32')
		.dest(path.join(__dirname, '../vendor'))
		.use(process.platform === 'win32' ? 'unzip.exe' : 'unzip');
}
