import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from '../actions';
import {
    IDispatchProps,
    IOwnProps,
    LigandList as LigandListComponent
} from '../components/LigandList';

const mapStateToProps = (_state: {}, ownProps: IOwnProps) => ownProps;
const mapDispatchToProps = (dispatch: Dispatch<actions.LigandAction>): IDispatchProps => {
    return {
        onColorClick: (id: string, color: string) => dispatch(actions.pickColor(id, color)),
        onHiLiteShownClick: (ids: string[]) => dispatch(actions.hiLiteShown(ids)),
        onHideAllClick: () => dispatch(actions.hideAll()),
        onShowAllClick: () => dispatch(actions.showAll()),
        onVisibilityClick: (id: string) => dispatch(actions.toggleVisibility(id))
    };
};

const connector = connect<{}, IDispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps);
export const LigandList = connector(LigandListComponent);
