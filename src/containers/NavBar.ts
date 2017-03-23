import { connect } from 'react-redux';

import {
    IDispatchProps,
    IOwnProps,
    NavBar as NavBarComp
} from '../components/NavBar';
import { actions } from '../sse';

const mapStateToProps = (_state: {}, ownProps: IOwnProps) => (ownProps);
const mapDispatchToProps = (dispatch: any): IDispatchProps  => {
    return {
        serverDisconnect: () => dispatch(actions.serverDisconnect()),
        serverModelChanged: () => dispatch(actions.serverModelChanged())
    };
};

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarComp);
