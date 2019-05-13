const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common');

const isDevMode = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
    name: 'client',
    target: 'web',

    entry: [
        isDevMode && 'webpack-hot-middleware/client',
        './src/index.jsx',
    ].filter(Boolean),

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(png|gif|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'file-loader',
            },
        ],
    },

    plugins: [
        !isDevMode &&
            new CleanWebpackPlugin('./public', {
                root: path.resolve(__dirname, '../'),
            }),
        isDevMode && new webpack.HotModuleReplacementPlugin(),
        /**
         * This plugin extract CSS into separate files.
         * It creates a CSS file per JS file which contains CSS.
         * It supports On-Demand-Loading of CSS and SourceMaps.
         * @link https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
         */
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ].filter(Boolean),
});
