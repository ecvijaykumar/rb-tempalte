var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
	  'webpack/hot/dev-server',  
      'webpack-hot-middleware/client',  
      './src/js/index'
  ],
  output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
