const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    cache: false,
    entry: {
        styles: path.resolve(__dirname, "src/styles/main.less"),
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
        clean: true
    },
    resolve: {
        extensions: [".ts", ".js", ".json", ".jsx"]
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        port: 3001,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path][name].[ext]"
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react-webpack-antd-boilerplate',
            filename: "index.html",
            template: "src/index.html"
        })
    ]
}