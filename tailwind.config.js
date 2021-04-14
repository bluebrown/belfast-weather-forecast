const isProd = process.env.NODE_ENV == 'production'
module.exports = {
    purge: {
        enabled: isProd,
        preserveHtmlElements: !isProd,
        content: [
            './src/**/*.html',
            './src/**/*.js',
        ]
    },
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
}