const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");

const common = require('./webpack.common');

module.exports = merge(common, {
    mode: process.env.NODE_ENV,
    devServer: {
        hot: true,
        open: true,
        contentBase: path.resolve(__dirname, 'dist'),
        port: process.env.PORT || 1337,
        publicPath: '/',
        historyApiFallback: true,
        disableHostCheck: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        minimize: false,
                        url: false
                    }
                }, 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
