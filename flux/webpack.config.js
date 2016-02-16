/**
 * The base configuration for webpack.
 */

var path = require('path');

module.exports = {
    // Specify the entry points of each app.
    entry: {
        'flux': './app.js'
    },

    // Each app will be bundled to this location, where `[name]` references each
    // key from `entry`.
    output: {
        path: path.dirname(__dirname),
        filename: '[name]/bundle.js'
    },

    // This allows us to non-relative paths in `require` statements. All
    // `require`s become relative to the root of this entire project.
    resolve: {
        root: __dirname,
        extensions: ['', '.js']
    },

    // These are loaders for precompiling files.
    module: {
        loaders: [
            // For jsx and es6 parsing.
            { test: /\.js$/, loader: 'babel?optional[]=runtime', exclude: /node_modules/ },
        ]
    },

    // Plugins for optimizing the bundling process.
    plugins: [
        // Subsequent files replace this.
    ]
};
