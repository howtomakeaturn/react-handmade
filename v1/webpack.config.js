var path = require('path');

module.exports = {
  module: {
    loaders: [{
      loader: 'babel-loader',
    }]
  },
  entry: './react/index.js',
  output: {
    filename: 'react.js',
    path: path.resolve(__dirname, './react/dist/'),
    library: 'React',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
}
