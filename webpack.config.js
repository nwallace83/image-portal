const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/client/index.js",
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: "bundle.[hash].js",
    },
    plugins: [
        new CleanWebpackPlugin(['dist/bundle*.js', 'dist/*.html'],{verbose: true}),
        new webpack.ProvidePlugin({ React: "react" }),
        new HtmlWebPackPlugin({
            template: '!!html-loader!src/client/index.html',
            filename:'index.html',
            title: 'My React Project',
            inject: 'body'

        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080'})
    ],
    devServer: {
        port:8080,
        contentBase: path.join(__dirname, 'dist'),
        index:'index.html'
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
            {
            test: /\.(scss)$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                },
                {
                    loader: 'sass-loader'
                }
            ]}
        ]
    }
};