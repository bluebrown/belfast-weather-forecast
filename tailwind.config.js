const isProd = process.env.NODE_ENV == 'production'
module.exports = {
    purge: {
        enabled: isProd,
        preserveHtmlElements: !isProd,
        content: [
            './public/index.html',
            './public/index.js',
        ]
    },
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
}