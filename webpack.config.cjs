const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProd ? 'production' : 'development',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: isProd ? '[name].[contenthash].js' : '[name].js',
        assetModuleFilename: 'assets/[name][hash][ext][query]',
        clean: true,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.(png|jpe?g|gif|svg|webp|avif)$/i,
                type: 'asset/resource'
            },
            {
                test: /.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: 'body'
        })
    ],
    devtool: isProd ? 'source-map' : 'eval-source-map',
    devServer: {
        static: { directory: path.resolve(__dirname, 'public') },
        historyApiFallback: true,
        hot: true,
        port: 3000,
        open: true
    },
    optimization: {
        splitChunks: { chunks: 'all' },
        runtimeChunk: 'single'
    },
    performance: {
        hints: false
    }
};