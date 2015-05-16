#!/usr/bin/env node
'use strict';

var spawn = require('child_process').spawn;
var unzip = require('./').unzip;
var input = process.argv.slice(2);
console.log(unzip);
spawn(unzip, input, {stdio: 'inherit'})
	.on('exit', process.exit);
