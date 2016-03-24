'use strict';

// helpful to link package.json and *.yaml files

var lintspacesrc = require('./lintspaces');

var spaceindentrc = {
	indentation : 'spaces',
	spaces : 2
};

// inherit all other rules from eslint
var k;
for (k in lintspacesrc) {
	if (lintspacesrc.hasOwnProperty(k)) {
		if (!spaceindentrc[k]) {
			spaceindentrc[k] = lintspacesrc[k];
		}
	}
}

module.exports = spaceindentrc;
