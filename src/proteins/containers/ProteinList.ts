import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from '../actions';
import {
    IDispatchProps,
    IOwnProps,
    ProteinList as ProteinListComponent
} from '../components/ProteinList';

const mapStateToProps = (_state: {}, ownProps: IOwnProps) => ownProps;
const mapDispatchToProps = (dispatch: Dispatch<actions.PocketAction | actions.ProteinAction>): IDispatchProps => {
    return {
        onHeteroVisibilityClick: (id: string) => dispatch(actions.toggleHetVisibility(id)),
        onHideAllClick: () => dispatch(actions.hideAll()),
        onPocketRadiusChange: (radius: number) => dispatch(actions.adjustPocketRadius(radius)),
        onPocketVisibilityClick: (id: string) => dispatch(actions.togglePocketVisibility(id)),
        onProteinVisibilityClick: (id: string) => dispatch(actions.toggleVisibility(id)),
        onShowAllClick: () => dispatch(actions.showAll())
    };
};

const connector = connect<{}, IDispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps);
export const ProteinList = connector(ProteinListComponent);
