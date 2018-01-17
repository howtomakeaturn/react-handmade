var path = require('path');

var reactConfig = {
  module: {
    loaders: [{
      loader: 'babel-loader',
    }]
  },
  entry: './react/index.js',
  output: {
    filename: 'react.js',
    path: path.resolve(__dirname, './dist/'),
    library: 'React',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};

var reactDOMConfig = {
  module: {
    loaders: [{
      loader: 'babel-loader',
    }]
  },
  entry: './react-dom/index.js',
  output: {
    filename: 'react-dom.js',
    path: path.resolve(__dirname, './dist/'),
    library: 'ReactDOM',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};

module.exports = [
    reactConfig, reactDOMConfig
];
