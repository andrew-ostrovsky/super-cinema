var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './app/client/app.js',
    output: {
        path: "./dist",
        filename: "app.bundle.js"
    },
    module: {
         loaders:
         [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                   presets: ["es2015", "react"]
                }
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new CopyWebpackPlugin([
            { from: "app/static/images", to: "images" },
            { from: "app/static/index.html" }
        ], {})
    ]
};
