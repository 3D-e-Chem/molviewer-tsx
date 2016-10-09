// TODO replace with `import React from 'react'`, but tslint complains see https://github.com/palantir/tslint/issues/893
import * as React from 'react';
import ReactDOM from 'react-dom';

import {HelloWorld} from './hello';

import 'bootstrap/dist/css/bootstrap.css!';

let container = document.getElementById('container');
ReactDOM.render(<HelloWorld />, container);
