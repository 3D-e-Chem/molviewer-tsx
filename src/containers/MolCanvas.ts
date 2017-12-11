import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
  IDispatchProps,
  IOwnProps,
  IStateProps,
  MolCanvas as MolCanvasComp
} from '../components/MolCanvas'
import { actions, IState } from '../stage'

const mapStateToProps = (
  state: IState,
  ownProps: IOwnProps
): IOwnProps & IStateProps => {
  return {
    center: state.stage.center,
    children: ownProps.children,
    id: ownProps.id
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch<actions.IStageAction>
): IDispatchProps => {
  return {
    onCenterSucceeded: () => dispatch(actions.centerStageSucceeded())
  }
}

export const MolCanvas = connect(mapStateToProps, mapDispatchToProps)(
  MolCanvasComp
)
