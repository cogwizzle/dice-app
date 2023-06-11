module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{php,css,html,js,wasm,mjs,json,md,rst,xml,lock,dist,eot,svg,ttf,woff,woff2,txt,wsdl,phpt,in,pem,xsd,gif,yml,png}',
	],
  globIgnores: [
    'roll.php',
    'vendor/**/*',
  ],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
};
