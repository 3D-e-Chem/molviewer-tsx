'use strict';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jspm', 'mocha'],
    jspm: {
      config: "jspm.config.js",
      loadFiles: ['src/polyfills.ts', 'src/**/*.spec.ts'],
      serveFiles: ['src/**/*.ts', 'tsconfig.json', '@types/**/*.d.ts'],
      coverage: ['src/**/!(*.spec).ts'],
    },
    proxies: {
      '/tsconfig.json': '/base/tsconfig.json',
      '/src/': '/base/src/',
      '/jspm_packages/': '/base/jspm_packages/',
      '/@types': '/base/@types',
    },
    preprocessors: {
    },
    reporters: [
      'progress',
      'mocha',
      'jspm',
    ],
    mochaReporter: {
      output: 'minimal',
      showDiff: 'unified'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    coverageReporter: {
      dir: 'test_results/coverage/',
      reporters: [
        {
          type: 'cobertura',
          subdir: './',
          file: 'cobertura.xml'
        }, {
          type: 'html',
          subdir: './report_html'
        }
      ],
      includeAllSources: true
    },
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
    browserNoActivityTimeout: 60000
  })
}
