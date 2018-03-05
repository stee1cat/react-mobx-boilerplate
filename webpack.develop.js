const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    resolve: {
        extensions: ['.js', 'jsx']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash:8].js',
        publicPath: '/',
        chunkFilename: '[name].[chunkhash:8].js'
    },
    entry: [
        './index.jsx'
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, 'dist'),
        port: process.env.PORT || 1337,
        publicPath: '/',
        historyApiFallback: true,
        disableHostCheck: true
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
