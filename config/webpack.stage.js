const browserslist = require('@instructure/browserslist-config-canvas-lms');
const CssMinimizerPlugin  = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const MB = 2 ** 20;


module.exports = {
    mode: 'production',
    entry: {
        desktop: [
            './src/hide-theme-editor-warning.css',
            'core-js/stable',
            './src/desktop/index.js'
        ],
        mobile: './src/mobile/index.js'
    },
    output: {
        filename: '[name].stage.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [[
                        '@babel/preset-env', {
                            targets: browserslist,
                            useBuiltIns: 'entry',
                            corejs: 3
                        }
                    ], [
                        '@babel/preset-react', {
                            runtime: 'automatic'
                        }
                    ]]
                }
            }]
        }, {
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: true,
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
                            ],
                            [
                                'postcss-clean', {
                                    level: {
                                        1: {
                                            removeEmpty: false
                                        },
                                        2: {
                                            removeEmpty: false
                                        }
                                    }
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
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            }),
            new CssMinimizerPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].stage.css'
        })
    ],
    performance: {
        hints: 'error',
        maxEntrypointSize: 2.5 * MB,
        maxAssetSize: 2.5 * MB
    }
};
