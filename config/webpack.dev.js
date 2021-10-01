const browserslist = require('@instructure/browserslist-config-canvas-lms');


module.exports = {
    mode: 'development',
    entry: {
        desktop: './src/desktop/index.js',
        mobile: './src/mobile/index.js'
    },
    output: {
        filename: '[name].dev.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [[
                        '@babel/preset-env', {
                            targets: browserslist
                        }
                    ]]
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
                loader: 'raw-loader'
            }, {
                loader: 'image-webpack-loader'
            }]
        }]
    }
};
