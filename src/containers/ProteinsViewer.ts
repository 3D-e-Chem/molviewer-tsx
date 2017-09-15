import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import * as proteins from '../proteins'
import { actions as sseActions } from '../sse'

import {
  IDispatchProps,
  IStateProps,
  ProteinsViewer as ProteinsViewerComponent
} from '../components/ProteinsViewer'

const mapStateToProps = (state: IStateProps) => state
const mapDispatchToProps = (
  dispatch: Dispatch<proteins.actions.IFetchRequested>
): IDispatchProps => {
  return {
    fetchProteins: () => dispatch(proteins.actions.fetchRequested()),
    pageLoaded: () => dispatch(sseActions.pageLoaded('ProteinsViewer'))
  }
}

const connector = connect<IStateProps, IDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)
export const ProteinsViewer = connector(ProteinsViewerComponent)
