const webpack = require('webpack');
const merge = require("webpack-merge");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const common = require('./webpack.common');

console.log(process.env.NODE_ENV);

module.exports = merge(common, {
    mode: 'production',
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
        new ExtractTextPlugin('[name].[hash:8].css')
    ]
});
