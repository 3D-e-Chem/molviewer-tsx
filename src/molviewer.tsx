import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld} from './hello';
import 'bootstrap/dist/css/bootstrap.css!';

let container = document.getElementById('container');
let component = ReactDOM.render(React.createElement(HelloWorld), container);