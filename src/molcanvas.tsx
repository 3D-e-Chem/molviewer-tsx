import {$3Dmol} from '3Dmol';
import $ from 'jquery';
import * as React from 'react';

import {ILigand} from './ligand';

interface IMolCanvasProps {
    ligands: ILigand[];
}

export class MolCanvas extends React.Component<IMolCanvasProps, {}> {
    private canvasContainerEl: Element;
    private viewer: $3Dmol.GLViewer;

    public render() {
        return <div style={{height: '100%', width: '100%'}} ref={(c) => this.canvasContainerEl = c}/>;
    }

    public componentDidMount() {
        const element = $(this.canvasContainerEl);
        let config = {};
        this.viewer = $3Dmol.createViewer(element, config);
        this.viewer.setBackgroundColor(0xffffff);
        const viewer = this.viewer;
        viewer.addSphere({ color: 'green', radius: 10 });
        viewer.zoomTo();
        viewer.render();
        viewer.zoom(0.8, 2000);
    }
}
