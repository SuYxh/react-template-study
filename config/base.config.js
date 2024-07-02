const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          }
        ],
      },
      {
        test: /\.(t|j)sx?$/,
        loader: 'babel-loader'
        // use: [
        //   'bable-loader'
        // ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ],
  devtool: false,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "js/[name].js"
  }
}