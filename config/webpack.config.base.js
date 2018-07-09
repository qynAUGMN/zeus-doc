const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'main': './site/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader',
                    options: { sourceMap: true }
                }, 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            sourceMap: true,
                        }
                    }]
            },
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader?cacheDirectory'],
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx'],
                }
            },
            {
                test: /\.(mdsx)$/,
                use: ['babel-loader', 'zeus-md-loader']
            },
            {
                test: /\.(svg)$/,
                use: ['url-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|otf)$/,
                use: ['url-loader']
            },
            {
                test: /\.(md)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'just dodo',
            favicon: './favicon.ico'
        })
    ]
}