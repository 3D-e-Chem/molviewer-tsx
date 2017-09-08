import configureMockStore from 'redux-mock-store'
import { IStore } from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'

import { OtherAction } from './actions'
import { rootEpic } from './rootEpic'

describe('rootEpic', () => {
  let store: IStore<{}>

  beforeEach(() => {
    const epicMiddleware = createEpicMiddleware(rootEpic)
    const mockStore = configureMockStore([epicMiddleware])
    store = mockStore()
  })

  it('should ignore otherAction', () => {
    store.dispatch(OtherAction)

    expect(store.getActions()).toEqual([OtherAction])
  })
})
