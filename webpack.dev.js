const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, './src/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react", "stage-0"]
        }
      }, {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }

        ]
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // OccurenceOrderPlugin is needed for webpack 1.x only
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({filename: 'index.html', template: './src/index.html', title: 'Night Search'}),
    new cleanWebpackPlugin(['public'], {
      verbose: true,
      dry: false
    }),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('dev')})
  ]
}
