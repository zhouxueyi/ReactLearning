var path = require('path');

module.exports = {
    entry: './app/main.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query:
            {
                presets:["es2015", "stage-0", "react"]
            }
        }
        ]
    }
};