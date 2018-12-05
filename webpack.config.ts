const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const plugins = [
    new HtmlWebpackPlugin({
        title:'东亭居士',
        template:'./src/index.html'
    })
]
module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    mode: 'none',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(css|scss)?$/,
          use: [
            'style-loader',
            'css-loader'
          ],
          exclude: /node_modules/
        },
        {
          test: /\.(png|svg|jpg|gif)?$/,
          use: 'file-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'build')
    },
    plugins
  };