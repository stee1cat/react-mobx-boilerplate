const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash:8].js',
        publicPath: '/',
        chunkFilename: '[name].[chunkhash:8].js'
    },
    entry: [
        './index.js'
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: process.env.PORT || 1337,
        host: '0.0.0.0',
        publicPath: '/',
        historyApiFallback: true,
        disableHostCheck: true
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
