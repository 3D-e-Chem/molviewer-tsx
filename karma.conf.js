'use strict';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jspm', 'mocha'],
    jspm: {
      config: "jspm.config.js",
      loadFiles: ['src/**/*.spec.tsx'],
      serveFiles: ['src/**/*.tsx']
    },
    proxies: {
      '/src/': '/base/src/',
      '/jspm_packages/': '/base/jspm_packages/'
    },
    preprocessors: {
    },
    reporters: [
      'progress',
      'mocha'
    ],
    mochaReporter: {
      output: 'minimal',
      showDiff: 'unified'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
