import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
  IDispatchProps,
  IOwnProps,
  NavBar as NavBarComp
} from '../components/NavBar'
import { actions } from '../sse'

const mapStateToProps = (_state: {}, ownProps: IOwnProps) => ownProps
const mapDispatchToProps = (
  dispatch: Dispatch<actions.connectedAction>
): IDispatchProps => {
  return {
    serverDisconnect: () => dispatch(actions.serverDisconnect()),
    serverModelChanged: () => dispatch(actions.serverModelChanged())
  }
}

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarComp)
