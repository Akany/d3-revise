var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./app/main.js']
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    plugins: [new HtmlWebpackPlugin()]
};