import 'rxjs/add/observable/of'

import { Observable } from 'rxjs/Observable'

import { actions } from 'react-redux-toastr'

export function errorResponse2toastr(response: Response, title = 'Error') {
  const toastrAction = actions.add({
    message: response.statusText,
    title,
    type: 'error'
  })
  return Observable.of(toastrAction)
}
