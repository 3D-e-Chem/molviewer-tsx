import React from 'react';
export class HelloWorld extends React.Component<{}, {}> {
  render() {
    let s = "some string";
    let t = s + 5;
    return <h1>Hello World</h1>;
  }
}
