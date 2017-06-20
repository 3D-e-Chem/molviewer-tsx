import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { actions } from '../pharmacophores';
import { actions as sseActions } from '../sse';

import {
    IDispatchProps,
    IStateProps,
    PharmacophoresViewer as PharmacophoresViewerComponent
} from '../components/PharmacophoresViewer';

const mapStateToProps = (state: IStateProps) => state;
const mapDispatchToProps = (dispatch: Dispatch<actions.IFetchRequested>): IDispatchProps => {
    return {
        fetchPharmacophores: () => dispatch(actions.fetchRequested()),
        pageLoaded: () => dispatch(sseActions.pageLoaded('PharmacophoresViewer'))
    };
};

const connector = connect<IStateProps, IDispatchProps, void>(mapStateToProps, mapDispatchToProps);
export const PharmacophoresViewer = connector(PharmacophoresViewerComponent);
