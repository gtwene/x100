var path = require('path');

module.exports = {
  // entry: './assets/js/index.js',
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, 'dist')
  // },
  devServer: {
    watchOptions: {
      ignored: [
        path.resolve(__dirname, 'dist'),
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'public'),
      ]
    }
  },
};