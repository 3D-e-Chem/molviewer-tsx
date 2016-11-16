import { connect } from 'react-redux';

import * as ligands from '../ligands';
import * as proteins from '../proteins';

import {
    IDispatchProps,
    IStateProps,
    LigandsAndProteinsViewer as LigandsAndProteinsViewerComponent
} from '../components/LigandsAndProteinsViewer';

const mapStateToProps = (state: IStateProps) => state;
const mapDispatchToProps = (dispatch: any): IDispatchProps => {
    return {
        fetchLigands: () => dispatch(ligands.actions.fetchRequested()),
        fetchProteins: () => dispatch(proteins.actions.fetchRequested())
    };
};

export const LigandsAndProteinsViewer = connect(mapStateToProps, mapDispatchToProps)(LigandsAndProteinsViewerComponent);
