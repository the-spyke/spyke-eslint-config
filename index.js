"use strict";

module.exports = {
	"extends": [
		"./base.js",
		"./import.js",
	].map(require.resolve)
};
