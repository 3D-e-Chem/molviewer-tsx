import { connect } from 'react-redux'

import { DisconnectedModal as DisconnectedModalComponent } from '../components/DisconnectedModal'
import { IState } from '../reducer'

const mapStateToProps = (state: IState) => ({ connected: state.sse.connected })
export const DisconnectedModal = connect(mapStateToProps)(
  DisconnectedModalComponent
)
