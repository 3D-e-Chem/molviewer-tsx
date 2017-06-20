import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { pageLoaded } from '../actions';
import { actions, constants } from '../pharmacophores';

import {
    IDispatchProps,
    IStateProps,
    PharmacophoresViewer as PharmacophoresViewerComponent
} from '../components/PharmacophoresViewer';

const mapStateToProps = (state: IStateProps) => state;
const mapDispatchToProps = (dispatch: Dispatch<actions.IFetchRequested>): IDispatchProps => {
    return {
        fetchPharmacophores: () => dispatch(actions.fetchRequested()),
        pageLoaded: () => dispatch(pageLoaded(constants.PHARMACOPHORES_HILITE_FETCH_REQUESTED))
    };
};

const connector = connect<IStateProps, IDispatchProps, void>(mapStateToProps, mapDispatchToProps);
export const PharmacophoresViewer = connector(PharmacophoresViewerComponent);
