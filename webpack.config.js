const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        main: './src/main.js',
        scrabble: './src/scrabble.js'
    },
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Caligrafia Elizabeth',
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            title: 'Sopa de letras',
            filename: 'scrabble.html',
            template: 'src/index.html',
            chunks: ['scrabble']
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(woff|ttf|woff2|eot|otf)/i,
                type: 'asset/resource'
            },
            {
                test: /\.txt/i,
                type: 'asset/source'
            }
        ]
    },
    optimization: {
        runtimeChunk: 'single'
    },
    externals: {
        jquery: 'jQuery'
    }
}