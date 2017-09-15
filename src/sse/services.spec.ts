import { createStore, Store } from 'redux'

import {
  IOtherAction,
  OtherAction,
  serverDisconnect,
  serverHiLiteChanged,
  serverModelChanged
} from './actions'
import { ServerListener, TDispatchActions } from './services'

function reducer(
  _state: TDispatchActions | IOtherAction,
  action: TDispatchActions
) {
  return action
}

describe('ServerListener', () => {
  let store: Store<{ type: string }>
  let listener: ServerListener

  beforeEach(() => {
    store = createStore(reducer)
    store.dispatch(OtherAction)
    listener = new ServerListener(store.dispatch)
  })

  describe('onMessage()', () => {
    it('on stop event should dispatch serverDisconnect action', () => {
      const event = { data: 'stop' }
      listener.onMessage(event)

      const expected = serverDisconnect()
      expect(store.getState()).toEqual(expected)
    })

    it('on modelChanged event should dispatch serverModelChanged action', () => {
      const event = { data: 'modelChanged' }
      listener.onMessage(event)

      const expected = serverModelChanged()
      expect(store.getState()).toEqual(expected)
    })

    describe('should dispatch serverHiLiteChanged', () => {
      afterEach(() => {
        const expected = serverHiLiteChanged()
        expect(store.getState()).toEqual(expected)
      })

      it('on hiLite event', () => {
        listener.onMessage({ data: 'hiLite' })
      })

      it('on unHiLite event', () => {
        listener.onMessage({ data: 'unHiLite' })
      })

      it('on unHiLiteAll event', () => {
        listener.onMessage({ data: 'unHiLiteAll' })
      })
    })

    it('should do nothing on other event', () => {
      const event = { data: 'other' }
      listener.onMessage(event)

      expect(store.getState().type).toEqual('')
    })
  })
})
