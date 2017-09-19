module.exports = {
    /** The Entry Point */
    entry: "./entry.js",
    /**Build directories */
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        rules: [
            /** For CSS */
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            /**For Images */
            {
                test: /\.(png|jpg|gif|svg|html)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }]
            }
        ]
    }
};
