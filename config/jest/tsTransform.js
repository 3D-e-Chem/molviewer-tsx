/**
 * Copyright (c) 2016-present, Netherlands eScience Center
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

// This file is a merger between the original transform.js and ts-jest/dist/preprocessor.js (https://github.com/kulshekhar/ts-jest/blob/370b9629d0c681aef6e0d869ce11073e60ca59ae/src/preprocessor.ts)
// The preprocessor from ts-jest could not be used directly,
// because it did not use babel and
// could not get configuration from the right place (../utils/createJestConfig.js)
// instead it was retrieved from of argv which was incomplete
const babelJest = require('babel-jest');
const tsc = require('typescript');
const glob = require('glob-all');
const nodepath = require('path');
const tsJestUtils = require('ts-jest/dist/utils');
const getPackageRoot = require('jest-util').getPackageRoot;
const root = getPackageRoot();

const babelTransformer = babelJest.createTransformer({
  presets: [require.resolve('babel-preset-react-app')],
  babelrc: false
});

function initializeCache(config) {
  const collectCoverage = config.collectCoverage;
  const coverageDirectory = config.coverageDirectory;
  const coverageReporters = config.coverageReporters;
  const collectCoverageFrom = config.collectCoverageFrom;
  const testResultsProcessor = config.testResultsProcessor;
  global.__ts_coverage__cache__ = {};
  global.__ts_coverage__cache__.sourceCache = {};
  global.__ts_coverage__cache__.coverageConfig = { collectCoverage: collectCoverage, coverageDirectory: coverageDirectory, coverageReporters: coverageReporters };
  global.__ts_coverage__cache__.coverageCollectFiles =
    collectCoverage &&
    testResultsProcessor &&
    collectCoverageFrom &&
    collectCoverageFrom.length ?
    glob.sync(collectCoverageFrom).map(function (x) { return nodepath.resolve(root, x); }) : [];
}

function tsProcess(src, path, config) {
  if (path.endsWith('.ts') || path.endsWith('.tsx')) {
    if (config.testResultsProcessor && !global.__ts_coverage__cache__) {
      // initialize only once
      initializeCache(config);
    }
    const transpiled = tsc.transpileModule(src, {
      compilerOptions: tsJestUtils.getTSConfig(config.globals, config.collectCoverage),
      fileName: path
    });
    if (global.__ts_coverage__cache__) {
      if (!config.testRegex || !path.match(config.testRegex)) {
        global.__ts_coverage__cache__.sourceCache[path] = transpiled.outputText;
      }
    }

    const start = transpiled.outputText.length > 12 ? transpiled.outputText.substr(1, 10) : '';

    const modified = start === 'use strict'
       ? `'use strict';require('ts-jest').install();${transpiled.outputText}`
       : `require('ts-jest').install();${transpiled.outputText}`;

    return modified;
  }
  return src;
}

// transpile the source with TypeScript, if needed, and then with Babel
module.exports = {
  process(src, path, config) {
    src = tsProcess(src, path, config);
    return babelTransformer.process(src, path);
  },
};
