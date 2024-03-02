module.exports = {
    globDirectory: 'public/',
    globPatterns: [
        '**/*.{css,html,js,wasm,mjs,json,md,rst,xml,lock,dist,eot,svg,ttf,woff,woff2,txt,wsdl,phpt,in,pem,xsd,gif,yml,png}',
    ],
    globIgnores: [
        '/roll',
        'vendor/**/*',
    ],
    swDest: 'public/sw.js',
    templatedURLs: {
        '/': 'index.html',
    },
    ignoreURLParametersMatching: [
        /^utm_/,
        /^fbclid$/
    ],
};
