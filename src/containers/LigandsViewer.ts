import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import * as ligands from '../ligands'
import { actions as sseActions } from '../sse'

import {
  IDispatchProps,
  IStateProps,
  LigandsViewer as LigandsViewerComponent
} from '../components/LigandsViewer'

const mapStateToProps = (state: IStateProps) => state
const mapDispatchToProps = (
  dispatch: Dispatch<ligands.actions.IFetchRequested>
): IDispatchProps => {
  return {
    fetchLigands: () => dispatch(ligands.actions.fetchRequested()),
    pageLoaded: () => dispatch(sseActions.pageLoaded('LigandsViewer'))
  }
}

const connector = connect<IStateProps, IDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)
export const LigandsViewer = connector(LigandsViewerComponent)
