const BabiliPlugin = require('babili-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./index.js",
    output: {
        filename: "build/bundle.js"
    },
    target: "node",
    devtool: "source-maps",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ["stage-3"],
                    plugins: []
                },
                exclude: /(node_modules|bower_components)/,
            }
        ]
    },
    plugins: [new BabiliPlugin()],
    resolve: {
        modules: [path.join(process.cwd(), "app"), "node_modules"],
        extensions: [".js", ".json"]
    }
};
