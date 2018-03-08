const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash:8].js',
        publicPath: '/',
        chunkFilename: '[name].[chunkhash:8].js'
    },
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-router'
        ],
        app: [
            'babel-polyfill',
            './index.jsx'
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../index.html'
        })
    ]
};
