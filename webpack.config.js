const path = require("path");
const fs = require("fs");
module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'string-replace-loader',
        options: {
          search: 'file-replace!!(.*)!!',
          replace: (match, p1, ) => fs.readFileSync(path.resolve(__dirname, p1), 'utf8').replace(/\r?\n|\r/g, " "),
          flags: 'g'
        }
      },
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
        }
      },
    ],
  }
};
