import {$3Dmol} from '3Dmol';
import $ from 'jquery';
import * as React from 'react';

import {LigandGLModel} from './glmodel';
import {ILigand} from './ligand';

interface IMolCanvasProps {
    ligands: ILigand[];
}

export class MolCanvas extends React.Component<IMolCanvasProps, {}> {
    private canvasContainerEl: Element;
    private viewer: $3Dmol.GLViewer;

    public render() {
        const glmodels: JSX.Element[] = [];
        // ligands
        this.props.ligands.forEach((ligand) => {
            glmodels.push(<LigandGLModel key={ligand.id} {...ligand} format='sdf' viewer={this.viewer}/>);
        });

        return <div style={{height: '100%', width: '100%'}} ref={(c) => this.canvasContainerEl = c}>
                   {glmodels}
               </div>;
    }

    public componentDidMount() {
        const element = $(this.canvasContainerEl);
        let config = {};
        this.viewer = $3Dmol.createViewer(element, config);
        this.viewer.setBackgroundColor(0xffffff);
        this.viewer.render();
    }
}
