const developmentConfig = require('@artevelde-uas/canvas-lms-app/webpack/development-config');


module.exports = {
    ...developmentConfig,
    devtool: 'eval-source-map',
    entry: {
        desktop: [
            './src/hide-test-env-warning.css',
            './src/hide-theme-editor-warning.css',
            './src/desktop/index.js'
        ],
        mobile: './src/mobile/index.js'
    },
    output: {
        filename: '[name].dev.js'
    }
};
