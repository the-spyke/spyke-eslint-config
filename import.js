"use strict";

module.exports = {
	"extends": [
		"plugin:import/recommended"
	],
	"plugins": [
		"import"
	],
	"rules": {
		"import/extensions": [
			"error",
			"ignorePackages"
		],
		"import/newline-after-import": "error",
		"import/no-cycle": "error",
		"import/no-extraneous-dependencies": "error",
		"import/no-mutable-exports": "error",
		"import/no-self-import": "error",
		"import/no-unresolved": [
			"error",
			{
				"commonjs": true
			}
		],
		"import/no-useless-path-segments": [
			"error",
			{
				"commonjs": true
			}
		],
		"import/order": [
			"error",
			{
				"groups": [
					"builtin",
					"external",
					"internal",
					[
						"parent",
						"sibling"
					],
					"index"
				],
				"newlines-between": "always-and-inside-groups",
				"pathGroupsExcludedImportTypes": [
					"builtin"
				]
			}
		]
	},
	"settings": {
		"import/extensions": [
			".js",
			".jsx",
			".cjs",
			".mjs",
		],
	},
};
