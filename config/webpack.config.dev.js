const path = require('path'),
    webpack = require('webpack'),
    basicConfig = require('./webpack.config.base.js');

module.exports = Object.assign(basicConfig, {
    mode: 'development',
    devServer: {
        hot: true,
        open: true,
        overlay: true,
    },
    devtool:'cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});