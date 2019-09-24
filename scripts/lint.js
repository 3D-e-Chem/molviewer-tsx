/**
 * Copyright (c) 2016-present, Netherlands eScience Center
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

var runner = require('tslint/lib/runner');

var options = {
    format: 'stylish',
    project: './tsconfig.json'
};

new runner.Runner(options, process.stdout)
    .run(function (status) { return process.exit(status); });

// TODO also run eslint

// TODO add npm run tslint -- --fix option
