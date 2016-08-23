import React from 'react';
import {MolContainer} from './molcontainer';

export class HelloWorld extends React.Component<{}, {}> {
  render() {
    return <div><h1>Hello World</h1><MolContainer></MolContainer></div>;
  }
}
