import * as React from 'react';

import * as ligands from '../ligands';
import * as proteins from '../proteins';

import { Layout } from '../components/Layout';
import { MolCanvas } from '../components/MolCanvas';
import { LigandGLModel } from '../ligands/components/LigandGLModel';
import { LigandList } from '../ligands/containers/LigandList';
import { ProteinGLModel } from '../proteins/components/ProteinGLModel';
import { ProteinList } from '../proteins/containers/ProteinList';

export interface IStateProps {
    ligands: ligands.ILigand[];
    proteins: proteins.IProtein[];
    pocketRadius: number;
}

export interface IDispatchProps {
    fetchLigands(): void;
    fetchProteins(): void;
}

export class LigandsAndProteinsViewer extends React.Component<IStateProps & IDispatchProps, {}> {
    public componentDidMount() {
        this.props.fetchLigands();
        this.props.fetchProteins();
    }

    public render() {
        const title = 'Ligands and proteins viewer';
        const sidebar = [
            <LigandList key="ligands" ligands={this.props.ligands}/>,
            <ProteinList key="proteins" proteins={this.props.proteins} pocketRadius={this.props.pocketRadius}/>
        ];
        const ligands = this.props.ligands.map((ligand) => (
            <LigandGLModel key={ligand.id} {...ligand}/>
        ));
        const proteins = this.props.proteins.map((protein) => (
            <ProteinGLModel key={protein.id} {...protein} pocketRadius={this.props.pocketRadius}/>
        ));
        const main = (
            <MolCanvas id="canvas">
                {ligands}
                {proteins}
            </MolCanvas>
        );
        return <Layout title={title} sidebar={sidebar} main={main}/>;
    }
}
