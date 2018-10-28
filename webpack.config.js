const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const outputDirectory = path.resolve(__dirname,"dist/public");

module.exports = {
    entry: "./src/app.js",
    output: {   
        path: path.resolve(__dirname,outputDirectory),
        filename: "bundle.[hash].js",
    },
    // devServer: {
    //     port:8080,
    //     contentBase: path.join(__dirname, 'dist'),
    //     index:'index.html'
    // },
    module: {
        rules: [
            {
                resolve: {
                    extensions: ['.js','.jsx']
                },
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(scss)$/,
                use: [
                  {
                    // Adds CSS to the DOM by injecting a `<style>` tag
                    loader: 'style-loader'
                  },
                  {
                    // Interprets `@import` and `url()` like `import/require()` and will resolve them
                    loader: 'css-loader'
                  },
                  {
                    // Loader for webpack to process CSS with PostCSS
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
                    // Loads a SASS/SCSS file and compiles it to CSS
                    loader: 'sass-loader'
                  }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([outputDirectory,'dist/server.js'],{verbose: true}),
        new HtmlWebPackPlugin({
            template: '!!html-loader!src/index.html',
            filename:'index.html',
            title: 'My React Project',
            inject: 'body'

        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080'}),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname,"src/server/server.js"), to: path.resolve(__dirname,"dist/") }
        ])
    ],
};