import { reducer as toastrReducer } from 'react-redux-toastr'
import { combineReducers } from 'redux'

import { reducer as ligands } from './ligands'
import { reducer as pharmacophores } from './pharmacophores'
import { reducer as pocketRadius } from './pocketradius'
import { reducer as proteins } from './proteins'
import { reducer as sse } from './sse'
import { reducer as stage } from './stage'

export const rootReducer = combineReducers({
  sse,
  ligands,
  pharmacophores,
  pocketRadius,
  proteins,
  stage,
  toastr: toastrReducer
})
