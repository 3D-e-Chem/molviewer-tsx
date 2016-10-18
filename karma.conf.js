'use strict';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jspm', 'mocha'],
    jspm: {
      config: "jspm.config.js",
      loadFiles: ['src/**/*.spec.tsx'],
      serveFiles: ['src/**/*.tsx', 'tsconfig.json', '@types/**/*.d.ts'],
      coverage: ['src/**/!(*.spec).tsx'],
    },
    proxies: {
      '/src/': '/base/src/',
      '/jspm_packages/': '/base/jspm_packages/',
      '/tsconfig.json': '/base/tsconfig.json',
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
    concurrency: Infinity
  })
}
