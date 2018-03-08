const webpack = require('webpack');
const merge = require("webpack-merge");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
    mode: process.env.NODE_ENV,
    devtool: false,
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: false,
                                url: false
                            }
                        },
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].[contenthash:8].css')
    ]
});