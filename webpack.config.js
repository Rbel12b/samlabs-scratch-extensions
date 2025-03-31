const path = require('path');

module.exports = [
    {
        entry: './extensions/samlabs.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'samlabs.js',
            libraryTarget: 'commonjs2'
        },
        mode: 'development',
        target: 'node'
    },
    {
        entry: './extensions/sambot.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'sambot.js',
            libraryTarget: 'commonjs2'
        },
        mode: 'development',
        target: 'node'
    }
];
