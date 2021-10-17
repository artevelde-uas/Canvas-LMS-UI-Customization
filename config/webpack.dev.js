const browserslist = require('@instructure/browserslist-config-canvas-lms');


module.exports = {
    mode: 'development',
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
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [[
                        '@babel/preset-env', {
                            targets: browserslist
                        }
                    ], [
                        '@babel/preset-react', {
                            runtime: 'automatic'
                        }
                    ]
                }
            }]
        }, {
            test: /\.css/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: true,
                        localIdentName: '[path]--[name]___[local]',
                        exportLocalsConvention: 'camelCaseOnly'
                    }
                }
            }, {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [
                            'postcss-import',
                            'postcss-nesting',
                            'postcss-preset-env',
                            [
                                'postcss-url', {
                                    url: 'inline',
                                    encodeType: 'base64'
                                }
                            ]
                        ]
                    }
                }
            }]
        }, {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [{
                loader: 'base64-image-loader'
            }]
        }]
    }
};
