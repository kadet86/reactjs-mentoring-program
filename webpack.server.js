const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common');

module.exports = merge(common, {
    name: 'server',
    target: 'node',
    entry: './src/serverRenderer.jsx',
    externals: [nodeExternals()],
    output: {
        filename: 'js/serverRenderer.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader/locals', // It doesn't embed CSS but only exports the identifier mappings.
                        options: {
                            modules: true,
                            localIdentName: '[name]-[hash:5]',
                        },
                    },
                ],
            },
            {
                test: /\.(png|gif|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'file-loader',
            },
        ],
    },
});
