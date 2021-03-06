"use strict";

module.exports = {
	"extends": [
		"eslint:recommended",
	],
	"rules": {
		"array-bracket-newline": [
			"error",
			"consistent"
		],
		"array-bracket-spacing": "error",
		"array-element-newline": [
			"error",
			"consistent"
		],
		"arrow-parens": [
			"error",
			"as-needed"
		],
		"arrow-spacing": "error",
		"block-spacing": "error",
		"brace-style": "error",
		"comma-dangle": [
			"error",
			"only-multiline"
		],
		"comma-spacing": "error",
		"comma-style": "error",
		"computed-property-spacing": "error",
		"consistent-return": "error",
		"curly": [
			"error",
			"multi-line"
		],
		"default-param-last": "error",
		"dot-location": [
			"error",
			"property"
		],
		"eol-last": "error",
		"eqeqeq": [
			"error",
			"always",
			{
				"null": "ignore"
			}
		],
		"func-call-spacing": "error",
		"generator-star-spacing": [
			"error",
			{
				"before": false,
				"after": true
			}
		],
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1
			}
		],
		"key-spacing": [
			"error",
			{
				"mode": "strict"
			}
		],
		"keyword-spacing": "error",
		"linebreak-style": "error",
		"new-parens": "error",
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-console": "error",
		"no-else-return": "error",
		"no-empty-function": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-floating-decimal": "error",
		"no-implied-eval": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-mixed-operators": "error",
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-multiple-empty-lines": [
			"error",
			{
				"max": 1,
				"maxBOF": 0,
				"maxEOF": 1
			}
		],
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-wrappers": "error",
		"no-return-assign": "error",
		"no-return-await": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-unmodified-loop-condition": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"no-void": "error",
		"no-whitespace-before-property": "error",
		"nonblock-statement-body-position": "error",
		"object-curly-newline": [
			"error",
			{
				"consistent": true
			}
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"one-var": [
			"error",
			"never"
		],
		"operator-linebreak": "error",
		"padded-blocks": [
			"error",
			"never"
		],
		"padding-line-between-statements": [
			"error",
			{
				"blankLine": "always",
				"prev": "*",
				"next": "block-like"
			},
			{
				"blankLine": "always",
				"prev": "block-like",
				"next": "*"
			},
			{
				"blankLine": "any",
				"prev": "block-like",
				"next": "block-like"
			},
			{
				"blankLine": "always",
				"prev": "*",
				"next": "const"
			},
			{
				"blankLine": "always",
				"prev": "const",
				"next": "*"
			},
			{
				"blankLine": "any",
				"prev": "const",
				"next": "const"
			},
			{
				"blankLine": "always",
				"prev": "*",
				"next": "let"
			},
			{
				"blankLine": "always",
				"prev": "let",
				"next": "*"
			},
			{
				"blankLine": "any",
				"prev": "let",
				"next": "let"
			}
		],
		"prefer-const": "error",
		"prefer-numeric-literals": "error",
		"prefer-regex-literals": "error",
		"prefer-rest-params": "error",
		"quotes": [
			"error",
			"double" // Compatibility with JSON
		],
		"radix": "error",
		"require-atomic-updates": "off", // Too many false positives.
		"rest-spread-spacing": "error",
		"semi": [
			"error",
			"always"
		],
		"semi-spacing": "error",
		"semi-style": "error",
		"space-before-blocks": "error",
		"space-before-function-paren": [
			"error",
			{
				"anonymous": "always",
				"named": "never",
				"asyncArrow": "always"
			}
		],
		"space-in-parens": "error",
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": "error",
		"switch-colon-spacing": "error",
		"template-curly-spacing": "error",
		"template-tag-spacing": "error",
		"wrap-iife": [
			"error",
			"inside"
		],
		"yield-star-spacing": [
			"error",
			{
				"before": false,
				"after": true
			}
		],
		"yoda": [
			"error",
			"never",
			{
				"exceptRange": true
			}
		]
	}
};
