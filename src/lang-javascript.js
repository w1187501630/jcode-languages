import * as tsLanguage from './lang-typescript.js';

export default {
	// Set defaultToken to invalid to see what you do not tokenize yet
	defaultToken: 'invalid',
	tokenPostfix: '.js',

	keywords: [
		'break',
		'case',
		'catch',
		'class',
		'continue',
		'const',
		'constructor',
		'debugger',
		'default',
		'delete',
		'do',
		'else',
		'export',
		'extends',
		'false',
		'finally',
		'for',
		'from',
		'function',
		'get',
		'if',
		'import',
		'in',
		'instanceof',
		'let',
		'new',
		'null',
		'return',
		'set',
		'super',
		'switch',
		'symbol',
		'this',
		'throw',
		'true',
		'try',
		'typeof',
		'undefined',
		'var',
		'void',
		'while',
		'with',
		'yield',
		'async',
		'await',
		'of'
	],
	typeKeywords: [],

	operators: tsLanguage.operators,
	symbols: tsLanguage.symbols,
	escapes: tsLanguage.escapes,
	digits: tsLanguage.digits,
	octaldigits: tsLanguage.octaldigits,
	binarydigits: tsLanguage.binarydigits,
	hexdigits: tsLanguage.hexdigits,
	regexpctl: tsLanguage.regexpctl,
	regexpesc: tsLanguage.regexpesc,
	tokenizer: tsLanguage.tokenizer
};