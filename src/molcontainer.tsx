import $ from 'jquery';
import $3Dmol from '3dmol/3Dmol.js';
import React from 'react';

export class MolContainer extends React.Component<{}, {}> {
  molContainer: Element;

  render() {
    let divStyle = {
      width: '60%',
      height: '400px',
      position: 'relative'
    };
    return (
      <div style={divStyle} ref={(c) => this.molContainer = c}></div>
    )
  }

  componentDidMount() {
    let element = $(this.molContainer);
    let config = { backgroundColor: 'orange'};
    // TODO make $3Dmol.createViewer work
    let viewer = $3Dmol.$3Dmol.createViewer(element, config);
    viewer.addSphere({ radius: 10, color: 'green' });
    viewer.zoomTo();
    viewer.render();
    viewer.zoom(0.8, 2000);
  }
}
