import { $3Dmol } from '3Dmol/release/3Dmol';
import * as $ from 'jquery';
import * as React from 'react';

import { LigandGLModel, ProteinGLModel } from './glmodel';
import { ILigand } from './ligand';
import { IProtein } from './protein';

interface IMolCanvasProps {
    ligands: ILigand[];
    proteins: IProtein[];
}

export class MolCanvas extends React.Component<IMolCanvasProps, {}> {
    private canvasContainerEl: Element;
    private viewer: $3Dmol.GLViewer;

    public render() {
        const ligands = this.props.ligands.map((ligand) => (
            <LigandGLModel key={ligand.id} {...ligand} viewer={this.viewer} />
        ));
        const proteins = this.props.proteins.map((protein) => (
            <ProteinGLModel key={protein.id} {...protein} viewer={this.viewer} />
        ));
        return <div style={{ height: '100%', width: '100%' }} ref={(c) => this.canvasContainerEl = c}>
            {ligands}
            {proteins}
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
