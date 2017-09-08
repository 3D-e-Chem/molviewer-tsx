import 'event-source-polyfill'

import { Dispatch } from 'redux'

import {
  IServerDisconnect,
  IServerHiLiteChanged,
  IServerModelChanged,
  serverDisconnect,
  serverHiLiteChanged,
  serverModelChanged
} from './actions'

export type TDispatchActions =
  | IServerDisconnect
  | IServerHiLiteChanged
  | IServerModelChanged

export class ServerListener {
  private url: string
  private source: EventSource
  private dispatch: Dispatch<TDispatchActions>

  constructor(dispatch: Dispatch<TDispatchActions>, url = '/api/broadcast') {
    this.dispatch = dispatch
    this.url = url
  }

  public listen() {
    this.source = new EventSource(this.url)
    this.source.onmessage = this.onMessage.bind(this)
  }

  public onMessage(event: IOnMessageEvent) {
    switch (event.data) {
      case 'stop':
        this.dispatch(serverDisconnect())
        break
      case 'modelChanged':
        this.dispatch(serverModelChanged())
        break
      case 'hiLite':
      case 'unHiLite':
      case 'unHiLiteAll':
        this.dispatch(serverHiLiteChanged())
        break
      default:
        break
    }
  }
}
