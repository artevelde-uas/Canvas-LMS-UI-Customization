const productionConfig = require('@artevelde-uas/canvas-lms-app/webpack/production-config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    ...productionConfig,
    entry: {
        desktop: [
            '@artevelde-uas/canvas-lms-app/src/server/hide-theme-editor-warning.css',
            'core-js/stable',
            './src/desktop/index.js'
        ],
        mobile: './src/mobile/index.js'
    },
    output: {
        filename: '[name].stage.js'
    },
    plugins: [
        ...productionConfig.plugins.filter(plugin => !(plugin instanceof MiniCssExtractPlugin)),
        new MiniCssExtractPlugin({
            filename: '[name].stage.css'
        })
    ]
};
