// TODO replace with `import React from 'react'`, but tslint complains see https://github.com/palantir/tslint/issues/893
import fetch from 'isomorphic-fetch';
import * as React from 'react';

import { ILigand, IRestLigand } from './ligand';
import { LigandList } from './ligandlist';
import { MolCanvas } from './molcanvas';

interface ISdfPdbViewerState {
    ligands: ILigand[];
}

export class SdfPdbViewer extends React.Component<{}, ISdfPdbViewerState> {
    public constructor() {
        super();
        this.state = {
            ligands: [],
        };
    }

    public fetchLigands() {
        return fetch('/api/ligands')
        .then(response => response.json())
        .then(this.addLigands.bind(this));
    }

    public addLigand(restLigand: IRestLigand) {
        const ligand = restLigand as ILigand;
        ligand.visible = true;
        return ligand;
    }

    public addLigands(ligands: IRestLigand[]) {
        this.setState({
            ligands: ligands.map((ligand) => {
                return this.addLigand(ligand);
            }),
        });
    }

    public componentDidMount() {
        this.fetchLigands();
    }

    public render() {
        return <div>
            <h1>Sdf & Pdb viewer</h1>
            <div style={{ display: 'flex', height: '900px' }}>
                <div style={{ marginLeft: '10px', width: '300px'}}>
                    <LigandList
                        ligands={this.state.ligands}
                        onLigandVisibilityClick={this.onLigandVisibilityClick.bind(this)}
                    />
                </div>
                <div style={{ flexGrow: 1, position: 'relative'}}>
                    <MolCanvas ligands={this.state.ligands}/>
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
        this.setState({ ligands: newLigands });
    }
}