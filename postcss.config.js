module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        cssnano: {
            // stripping the comments to make the bucket identify the mime type
            preset: ["default", { discardComments: { removeAll: true } }],
        },
    }
}