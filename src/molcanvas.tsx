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
    private viewer: $3Dmol.IGLViewer;

    constructor() {
        super();
        this.canvasRefHandler = this.canvasRefHandler.bind(this);
    }

    public render() {
        const ligands = this.props.ligands.map((ligand) => (
            <LigandGLModel key={ligand.id} {...ligand} viewer={this.viewer} />
        ));
        const proteins = this.props.proteins.map((protein) => (
            <ProteinGLModel key={protein.id} {...protein} viewer={this.viewer} />
        ));
        return <div style={{ height: '100%', width: '100%' }} ref={this.canvasRefHandler}>
            {ligands}
            {proteins}
        </div>;
    }

    public componentDidMount() {
        const element = jQuery(this.canvasContainerEl);
        const config = {};
        this.viewer = $3Dmol.createViewer(element, config);
        this.viewer.setBackgroundColor(0xffffff);
        this.viewer.render();
    }

    private canvasRefHandler(ref: Element) {
        this.canvasContainerEl = ref;
    }
}
