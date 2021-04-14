const isProd = process.env.NODE_ENV == 'production'
module.exports = {
    purge: {
        enabled: isProd,
        preserveHtmlElements: !isProd,
        content: [
            './public/**/*.html',
            './public/**/*.js',
        ]
    },
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
}