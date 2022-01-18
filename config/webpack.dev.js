const developmentConfig = require('@artevelde-uas/canvas-lms-app/webpack/development-config');


module.exports = {
    ...developmentConfig,
    devtool: 'eval-source-map',
    entry: {
        desktop: [
            '@artevelde-uas/canvas-lms-app/src/server/hide-test-env-warning.css',
            '@artevelde-uas/canvas-lms-app/src/server/hide-theme-editor-warning.css',
            './src/desktop/index.js'
        ],
        mobile: './src/mobile/index.js'
    },
    output: {
        filename: '[name].dev.js'
    }
};
