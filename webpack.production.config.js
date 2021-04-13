const path = require("path");

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
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
}
