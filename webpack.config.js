module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: "C:\\Users\\Brad\\Desktop\\projects\\travel-site\\app\\temp\\scripts",
    filename: "App.js"
  },
  module: {
        rules: [
            {
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};
