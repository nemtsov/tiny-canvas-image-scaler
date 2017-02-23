/* eslint-env node */

const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: [
      'jasmine'
    ],
    files: [
      require.resolve('es6-shim'),
      'test/specs/**/*.js'
    ],
    preprocessors: {
      'test/specs/**/*.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [{
        type: 'text-summary'
      }, {
        type: 'html',
        dir: 'coverage/'
      }]
    }
  });
};
