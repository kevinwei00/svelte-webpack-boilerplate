const paths = require('./paths');
const preprocess = require('svelte-preprocess');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  resolve: {
    alias: {
      svelte: paths.resolve('node_modules', 'svelte'),
      assets: paths.resolve(paths.rootDir(), 'assets')
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  output: {
    filename: 'js/[name].[contenthash].js',
    path: paths.resolve(paths.rootDir(), 'dist')
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: true,
            preprocess: preprocess([preprocess.scss()])
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|mp4|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[contenthash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()]
};
