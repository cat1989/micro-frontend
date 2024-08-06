const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

const config = {
    mode: process.env.NODE_ENV,
    target: 'web',
    entry: isProduction ? './src/bootstrap' : './src',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, './src'),
        },
        extensions: [
            ".vue", ".js",
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 10,
                            esModule: false,
                            name: isProduction ? 'assets/images/[contenthash].[ext]' : '[path]/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: isProduction ? 'assets/fonts/[contenthash].[ext]' : '[path]/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new VueLoaderPlugin(),
    ],
}

if (isProduction) {
    config.output = {
        ...config.output,
        filename: 'scripts/[contenthash].js',
        chunkFilename: 'scripts/[contenthash].js',
        clean: true,
        library: {
            type: 'var',
            name: 'home',
        },
        publicPath: '//localhost:3001/',
    }
    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: 'styles/[contenthash].css',
            chunkFilename: 'styles/[contenthash].css',
        })
    )
    config.optimization = {
        minimize: true,
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin({
                extractComments: false,
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
            }),
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    }
}
else {
    config.devtool = 'source-map'
    config.devServer = {
        host: '0.0.0.0',
        port: 'auto',
        hot: true,
    }
}

module.exports = config
