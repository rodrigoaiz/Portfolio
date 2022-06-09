const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/js'),
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        }
                    },
                ]
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.PNG$|\.svg$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: false,
                      name: '../images/[name].[ext]'
                    },
                  },
                ],
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                type: 'asset/inline'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "../index.html",
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "../css/estilos.css",
          }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
        }),

    ]
};