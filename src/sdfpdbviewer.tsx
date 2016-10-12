import * as React from 'react';

import { ILigand, fetchLigands } from './ligand';
import { LigandList } from './ligandlist';
import { MolCanvas } from './molcanvas';
import { IProtein, fetchProteins } from './protein';
import { ProteinList} from './proteinlist';

interface ISdfPdbViewerState {
    ligands: ILigand[];
    proteins: IProtein[];
}

export class SdfPdbViewer extends React.Component<{}, ISdfPdbViewerState> {
    public constructor() {
        super();
        this.state = {
            ligands: [],
            proteins: [],
        };
    }

    public addLigands(ligands: ILigand[]) {
        this.setState({
            ligands,
            proteins: this.state.proteins,
        });
    }

    public addProteins(proteins: IProtein[]) {
        this.setState({
            ligands: this.state.ligands,
            proteins,
        });
    }

    public componentDidMount() {
        fetchLigands().then(this.addLigands.bind(this));
        fetchProteins().then(this.addProteins.bind(this));
    }

    public render() {
        return <div>
            <h1>Ligands and proteins viewer</h1>
            <div style={{ display: 'flex', height: '900px' }}>
                <div style={{ marginLeft: '10px', width: '300px'}}>
                    <LigandList
                        ligands={this.state.ligands}
                        onLigandVisibilityClick={this.onLigandVisibilityClick.bind(this)}
                    />
                    <ProteinList
                        proteins={this.state.proteins}
                        onProteinVisibilityClick={this.onProteinVisibilityClick.bind(this)}
                        onHeteroVisibilityClick={this.onHeteroVisibilityClick.bind(this)}
                    />
                </div>
                <div style={{ flexGrow: 1, position: 'relative'}}>
                    <MolCanvas ligands={this.state.ligands} proteins={this.state.proteins}/>
                </div>
            </div>
        </div>;
    }

    protected onLigandVisibilityClick(ligandId: string) {
        const newLigands = this.state.ligands.map((ligand) => {
            if (ligand.id === ligandId) {
                return Object.assign({}, ligand, {
                    visible: !ligand.visible,
                });
            }
            return ligand;
        });
        this.setState({
            ligands: newLigands,
            proteins: this.state.proteins,
        });
    }

    protected onProteinVisibilityClick(proteinId: string) {
        const newProteins = this.state.proteins.map((protein) => {
            if (protein.id === proteinId) {
                return Object.assign({}, protein, {
                    visible: !protein.visible,
                });
            }
            return protein;
        });
        this.setState({
            ligands: this.state.ligands,
            proteins: newProteins,
        });
    }

    protected onHeteroVisibilityClick(proteinId: string) {
        const newProteins = this.state.proteins.map((protein) => {
            if (protein.id === proteinId) {
                return Object.assign({}, protein, {
                    hetVisible: !protein.hetVisible,
                });
            }
            return protein;
        });
        this.setState({
            ligands: this.state.ligands,
            proteins: newProteins,
        });
    }
}
