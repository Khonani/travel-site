module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: "C:\\Users\\Brad\\Desktop\\projects\\travel-site\\app\\temp\\scripts",
    filename: "[name].js"
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
