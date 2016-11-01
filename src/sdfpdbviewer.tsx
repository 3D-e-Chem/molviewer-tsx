import * as React from 'react';
import { connect } from 'react-redux';

import * as ligandActions from './actions/ligands';
import * as proteinActions from './actions/proteins';
import { DisconnectedModal } from './disconnected';
import { ILigand } from './ligand';
import { LigandList } from './ligandlist';
import { MolCanvas } from './molcanvas';
import { NavBar } from './navbar';
import { IProtein } from './protein';
import { ProteinList } from './proteinlist';

interface IStateProps {
    ligands: ILigand[];
    proteins: IProtein[];
    connected: boolean;
}

interface IDispatchProps {
    fetchLigands(): void;
    fetchProteins(): void;
    onHeteroVisibilityClick(id: string): void;
    onLigandVisibilityClick(id: string): void;
    onProteinVisibilityClick(id: string): void;
    onHideLigands(): void;
    onHideProteins(): void;
    onShowLigands(): void;
    onShowProteins(): void;
}

type IComponentProps = IStateProps & IDispatchProps;

const mapStateToProps = (state: IStateProps) => state;
const mapDispatchToProps = (dispatch: any): IDispatchProps => {
    return {
        fetchLigands: () => dispatch(ligandActions.fetchRequested()),
        fetchProteins: () => dispatch(proteinActions.fetchRequested()),
        onHeteroVisibilityClick: (id: string) => dispatch(proteinActions.toggleHetVisibility(id)),
        onHideLigands: () => dispatch(ligandActions.hideAll()),
        onHideProteins: () => dispatch(proteinActions.hideAll()),
        onLigandVisibilityClick: (id: string) => dispatch(ligandActions.toggleVisibility(id)),
        onProteinVisibilityClick: (id: string) => dispatch(proteinActions.toggleVisibility(id)),
        onShowLigands: () => dispatch(ligandActions.showAll()),
        onShowProteins: () => dispatch(proteinActions.showAll()),
    };
};

// @connect<IStateProps, IDispatchProps, {}>(mapStateToProps, mapDispatchToProps)
export class SdfPdbViewer extends React.Component<IComponentProps, {}> {
    public componentDidMount() {
        this.props.fetchLigands();
        this.props.fetchProteins();
    }

    public render() {
        return <div>
            <NavBar title='Ligands and proteins viewer'/>
            <DisconnectedModal connected={this.props.connected} />
            <div style={{ display: 'flex', height: '900px' }}>
                <div style={{ marginLeft: '10px', width: '300px' }}>
                    <LigandList
                        ligands={this.props.ligands}
                        onLigandVisibilityClick={this.props.onLigandVisibilityClick}
                        onHideAllClick={this.props.onHideLigands}
                        onShowAllClick={this.props.onShowLigands}
                    />
                    <ProteinList
                        proteins={this.props.proteins}
                        onProteinVisibilityClick={this.props.onProteinVisibilityClick}
                        onHeteroVisibilityClick={this.props.onHeteroVisibilityClick}
                        onHideAllClick={this.props.onHideProteins}
                        onShowAllClick={this.props.onShowProteins}
                    />
                </div>
                <div style={{ flexGrow: 1, position: 'relative' }}>
                    <MolCanvas
                        ligands={this.props.ligands}
                        proteins={this.props.proteins}
                    />
                </div>
            </div>
        </div>;
    }
}

// TODO replace with decorator, now gives typescript error
export const ConnectedSdfPdbViewer = connect(mapStateToProps, mapDispatchToProps)(SdfPdbViewer);
