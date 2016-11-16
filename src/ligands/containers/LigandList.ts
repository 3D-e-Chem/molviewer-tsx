import { connect } from 'react-redux';

import * as actions from '../actions';
import {
    IDispatchProps,
    IOwnProps,
    LigandList as LigandListComponent
} from '../components/LigandList';

const mapStateToProps = (_state: {}, ownProps: IOwnProps) => ownProps;
const mapDispatchToProps = (dispatch: any): IDispatchProps => {
    return {
        onHideAllClick: () => dispatch(actions.hideAll()),
        onHiLiteShownClick: (ids: string[]) => dispatch(actions.hiLiteShown(ids)),
        onVisibilityClick: (id: string) => dispatch(actions.toggleVisibility(id)),
        onShowAllClick: () => dispatch(actions.showAll())
    };
};

export const LigandList = connect<{}, IDispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps)(LigandListComponent);
