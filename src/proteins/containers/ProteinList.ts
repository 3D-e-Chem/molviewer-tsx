import { connect } from 'react-redux';

import * as actions from '../actions';
import {
    IDispatchProps,
    IOwnProps,
    ProteinList as ProteinListComponent
} from '../components/ProteinList';

const mapStateToProps = (_state: {}, ownProps: IOwnProps) => ownProps;
const mapDispatchToProps = (dispatch: any): IDispatchProps => {
    return {
        onHideAllClick: () => dispatch(actions.hideAll()),
        onHeteroVisibilityClick: (id: string) => dispatch(actions.toggleHetVisibility(id)),
        onPocketVisibilityClick: (id: string) => dispatch(actions.togglePocketVisibility(id)),
        onProteinVisibilityClick: (id: string) => dispatch(actions.toggleVisibility(id)),
        onShowAllClick: () => dispatch(actions.showAll())
    };
};

export const ProteinList = connect<{}, IDispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps)(ProteinListComponent);
