const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/client/index.js",
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: "server.js",
    },
    plugins: [
        new CleanWebpackPlugin(['server.js'],{verbose: true})
        new HtmlWebPackPlugin({
            template: '!!html!src/client/index.html',
            filename: 'dist/index.html'
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
    },
    module: {
        rules: [
            {
                resolve: {
                    extensions: ['.js','.jsx']
                },
                exclude: /node_modules/,
                include:/src\/client/,use: {
                    loader: 'babel-loader'
                }
            },
        ]
    }
};