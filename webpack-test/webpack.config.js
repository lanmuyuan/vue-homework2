const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin, default: loader } = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'lib.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        port:30000,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options:{
                        url:false
                    }
                }]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            // <!-- base64的图片的字符串也叫做DataUrl  -->     <!-- 图片的src属性, 不仅仅可以识别的相对/路径  还可以识别base64编码 -->   <!-- base64 实际上就是图片经过编译生成的字符串 -->   <!-- base64显示图片的优点: 减少网络请求的次数  -->   <!-- base64显示图片的缺点: base64生成字符串会比原始图片大1/3  -->     <!-- 你是选用base64还是选用路径的方式? -->   <!-- 大的图片使用路径, 小的图片使用base64 -->
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset',
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 2 * 1024,
                //     },
                // },
                parser:{
                    dataUrlCondition: {
                        maxSize: 25 * 1024,
                    }
                },
                generator: {
                    filename: 'images/[name]-[hash:6][ext]',
                },
            },
            {
                test:/\.(svg|woff|ttf|eot|woff2)$/,
                type: 'asset/resource',
                generator:{
                    filename: 'fonts/[hash][ext]',
                }
            },
            {
                test:/\.js$/,
                exclude:path.join(__dirname, 'node_modules'),
                use:['babel-loader']
            }
        ]
    },
}