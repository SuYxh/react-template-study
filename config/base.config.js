const path = require('path');
const { rule } = require('postcss/lib/postcss');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader'
          }
        ],
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist')
  }
}