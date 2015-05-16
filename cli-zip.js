#!/usr/bin/env node
'use strict';

var spawn = require('child_process').spawn;
var zip = require('./').zip;
var input = process.argv.slice(2);

spawn(zip, input, {stdio: 'inherit'})
	.on('exit', process.exit);
