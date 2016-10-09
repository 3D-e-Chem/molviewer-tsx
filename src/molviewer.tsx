import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld} from './hello';
import 'bootstrap/dist/css/bootstrap.css!';

let container = document.getElementById('container');
ReactDOM.render(<HelloWorld />, container);
