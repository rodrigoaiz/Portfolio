const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var $ = require( "jquery" );
module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: pathData => {
        const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
        return `${filepath}/[name][ext]`;
        // recuperado de: https://stackoverflow.com/questions/67723670/how-to-change-path-for-output-images-in-webpack-5
      },
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
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(eot|woff|woff2|ttf)$/,
                type: 'asset/inline'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "./css/estilos.css",
          }),
        /* new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
      }), */

    ]
};
