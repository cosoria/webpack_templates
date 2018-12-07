const path = require("path");

/*
path: path.resolve(__dirname, "./dist"),
*/ 

module.exports = {
    mode: "development",
    entry: "./js/main.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.bundle.js"
    }
};