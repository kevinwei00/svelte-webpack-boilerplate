const paths = require('./paths');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge.smart(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.resolve(paths.rootDir(), 'assets')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './config'
              }
            }
          }
        ]
      }
    ]
  }
});
