import React from 'react';

export class HelloWorld extends React.Component<{}, {}> {
  render() {
    return <h1>{this.saying()}</h1>;
  }

  saying() {
    return 'Hello World!';
  }
}
