import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as ligands from '../ligands';
import * as proteins from '../proteins';

import {
    IDispatchProps,
    IStateProps,
    LigandsAndProteinsViewer as LigandsAndProteinsViewerComponent
} from '../components/LigandsAndProteinsViewer';

type fetchRequested = ligands.actions.IFetchRequested | ligands.actions.IFetchRequested;

const mapStateToProps = (state: IStateProps) => state;
const mapDispatchToProps = (dispatch: Dispatch<fetchRequested>): IDispatchProps => {
    return {
        fetchLigands: () => dispatch(ligands.actions.fetchRequested()),
        fetchProteins: () => dispatch(proteins.actions.fetchRequested())
    };
};

export const LigandsAndProteinsViewer = connect(mapStateToProps, mapDispatchToProps)(LigandsAndProteinsViewerComponent);
