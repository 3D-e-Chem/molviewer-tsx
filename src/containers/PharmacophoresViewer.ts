import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { actions } from '../pharmacophores';

import {
    IDispatchProps,
    IStateProps,
    PharmacophoresViewer as PharmacophoresViewerComponent
} from '../components/PharmacophoresViewer';

const mapStateToProps = (state: IStateProps) => state;
const mapDispatchToProps = (dispatch: Dispatch<actions.IFetchRequested>): IDispatchProps => {
    return {
        fetchPharmacophores: () => dispatch(actions.fetchRequested())
    };
};

const connector = connect<IStateProps, IDispatchProps, void>(mapStateToProps, mapDispatchToProps);
export const PharmacophoresViewer = connector(PharmacophoresViewerComponent);
