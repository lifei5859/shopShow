var HtmlPlugin = require('html-webpack-plugin');
var CssPlugin = require('mini-css-extract-plugin');
var Uglifyjs = require('uglifyjs-webpack-plugin');
var webpack = require('webpack');
var providePlugin = new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery' });
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/dist',
        publicPath:'/dist/'
    },
    mode: 'development',
    devServer: {
        contentBase: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [CssPlugin.loader, 'css-loader']
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'img:data-src']
                        // minimize: false
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'url-loader?limit=1024&name=[name].[ext]&outputPath=images/&publicPath=images/'


            }

        ]
    },
    plugins: [
        new HtmlPlugin({
            template: './index.html',
            filename: './index.html'
        }),
        new CssPlugin('[name].css')
    ]


}