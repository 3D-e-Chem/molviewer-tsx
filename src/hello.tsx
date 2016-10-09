import React from 'react';

export class HelloWorld extends React.Component<{}, {}> {
  public render() {
    return <h1>{this.saying()}</h1>;
  }

  public saying() {
    return 'Hello World!';
  }
}
