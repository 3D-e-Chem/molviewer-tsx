import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { actions as pactions } from '../../pocketradius'
import * as actions from '../actions'
import {
  IDispatchProps,
  IOwnProps,
  ProteinList as ProteinListComponent
} from '../components/ProteinList'

const mapStateToProps = (_state: {}, ownProps: IOwnProps) => ownProps

export type IDispatch = Dispatch<pactions.PocketAction | actions.ProteinAction>

export const mapDispatchToProps = (dispatch: IDispatch): IDispatchProps => {
  return {
    onHeteroVisibilityClick: (id: string) =>
      dispatch(actions.toggleHetVisibility(id)),
    onHideAllClick: () => dispatch(actions.hideAll()),
    onPocketRadiusChange: (radius: number) =>
      dispatch(pactions.adjustPocketRadius(radius)),
    onPocketVisibilityClick: (id: string) =>
      dispatch(actions.togglePocketVisibility(id)),
    onProteinVisibilityClick: (id: string) =>
      dispatch(actions.toggleProteinVisibility(id)),
    onShowAllClick: () => dispatch(actions.showAll()),
    onWholeProteinVisibilityClick: (id: string) =>
      dispatch(actions.toggleVisibility(id))
  }
}

const connector = connect<{}, IDispatchProps, IOwnProps>(
  mapStateToProps,
  mapDispatchToProps
)
export const ProteinList = connector(ProteinListComponent)
