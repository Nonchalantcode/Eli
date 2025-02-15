const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        main: './src/main.js',
        calligraphy: './src/calligraphy',
        scrabble: './src/scrabble.js'
    },
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Caligrafia Elizabeth',
            filename: 'index.html',
            template: 'src/calligraphy.html',
            chunks: ['main', 'calligraphy'],
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            title: 'Sopa de letras',
            filename: 'silabas.html',
            template: 'src/index.html',
            chunks: ['main', 'scrabble'],
            inject: 'body'
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