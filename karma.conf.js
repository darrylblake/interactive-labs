module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['browserify', 'mocha'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'test/**/*-test.js',
    ],
    preprocessors: {
      'test/**/*.js': ['browserify', 'babel', 'stage-0'],
    },
    browsers: ['PhantomJS'],
    browserify: {
      debug: true,
      transform: [
        ['babelify', { presets: ['es2015', 'react', 'stage-0'] }],
        // ['babelify'],
      ],
      configure: function(bundle) {
        bundle.on('prebundle', function() {
          bundle.external('react/addons');
          bundle.external('react/lib/ReactContext');
          bundle.external('react/lib/ExecutionEnvironment');
          bundle.external('react/lib/ExecutionEnvironment');
        });
      }
    },
  });
};
