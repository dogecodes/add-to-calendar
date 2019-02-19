const webpack = require("webpack");
const path = require("path");
const loaders = require('./loaders');

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            loaders.JSLoader
        ]
    },
    stats: {
        colors: true
    },
    devtool: "source-map",
    output: {
        filename: "add-to-calendar.js",
        path: path.resolve(__dirname, "dist"),
        library: "calendar",
        libraryTarget: "window"
    }
};
