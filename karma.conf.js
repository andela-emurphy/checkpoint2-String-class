// Karma configuration
// Generated on Thu Dec 15 2016 04:59:07 GMT+0100 (WAT)

module.exports = (config) => {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './public/src/string_class.js',
      './test/stringClass.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors:
    //https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'public/src/string_class.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'coveralls'],

    // sets the format and folder for coverage report
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },

    // custom browser luncher
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    coverallsReporter: {
      repo_token: 'EEurTQ616KvF7GfIVqeq1oa9cdZkcHTxp'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE ||
    //config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and
    // executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: h
    // https://npmjs.org/browse/keyword/karma-launcher
    browsers: process.env.TRAVIS ? ['Chrome_travis_ci'] : ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
