module.exports = {
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['behance']
      }
    }]
  },
};
