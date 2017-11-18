const { ContextReplacementPlugin } = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/client/main.css',
    './src/client/main.ts'
  ],
  output: {
    path: `${__dirname}/public`,
    filename: 'assets/bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new ContextReplacementPlugin(/angular(\\|\/)core/, __dirname),
    new ExtractTextPlugin('assets/bundle.css')
  ],
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.ts$/,
        use: ['ts-loader', 'angular2-template-loader']
      }
    ]
  },
  devServer: {
    contentBase: 'public',
    open: true,
    port: 9001,
    proxy: {
      '/rpc': 'http://localhost:9000'
    }
  }
};
