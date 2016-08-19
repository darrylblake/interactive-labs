var webpack = require('webpack');
var HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin()
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [HTMLWebpackPluginConfig, HotModuleReplacementPlugin],
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  }
};
