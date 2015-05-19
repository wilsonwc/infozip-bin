'use strict';

var log = require('logalot');
var bin = require('./');

bin.zip.run(['--version'], function (err) {
	if (err) {
		log.error(err.stack);
		return;
	}

	log.success('zip pre-build test passed successfully');
});

bin.unzip.run(['--help'], function (err) {
	if (err) {
		log.error(err.stack);
		return;
	}

	log.success('unzip pre-build test passed successfully');
});
