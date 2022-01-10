const productionConfig = require('@artevelde-uas/canvas-lms-app/webpack/production-config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MB = 2 ** 20;


module.exports = {
    ...productionConfig,
    entry: {
        desktop: [
            'core-js/stable',
            './src/desktop/index.js'
        ],
        mobile: './src/mobile/index.js'
    },
    output: {
        filename: '[name].prod.js'
    },
    plugins: [
        ...productionConfig.plugins.filter(plugin => !(plugin instanceof MiniCssExtractPlugin)),
        new MiniCssExtractPlugin({
            filename: '[name].prod.css'
        })
    ],
    performance: {
        hints: 'error',
        maxEntrypointSize: 5 * MB,
        maxAssetSize: 5 * MB
    }
};
