const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.jsx",
    mode: "development",
    devServer: {
        historyApiFallback: true,
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: "./bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
      },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {test: /\.(png|gif|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'file-loader'},
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ],
    },
};
