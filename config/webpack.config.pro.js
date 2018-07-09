const basicConfig = require('./webpack.config.base.js');

let config = Object.assign(basicConfig, {
    mode: 'production',
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                },
                vendor: { // 将第三方模块提取出来
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10, // 优先
                    enforce: true
                }
            }
        }
    }
});

config.plugins.push(
    // new CompressionWebpackPlugin({
    //     asset: '[path].gz[query]',
    //     algorithm: 'gzip',
    //     test: new RegExp('\\.(js|css)$'),
    //     threshold: 10240,
    //     minRatio: 0.8
    // }),
    // new BundleAnalyzerPlugin()
)

module.exports = config;