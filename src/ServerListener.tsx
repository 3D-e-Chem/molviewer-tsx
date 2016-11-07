import {Dispatch} from 'redux';

import {serverDisconnect, serverModelChanged} from './actions/server';

type TDispatchActions = serverDisconnect | serverModelChanged;

export class ServerListener {
    private url: string;
    private source: EventSource;
    private dispatch: Dispatch<TDispatchActions>;

    constructor(dispatch: Dispatch<TDispatchActions>, url: string = '/api/broadcast') {
        this.dispatch = dispatch;
        this.url = url;
    }

    public listen() {
        this.source = new EventSource(this.url);
        this.source.onmessage = this.onMessage.bind(this);
    }

    public onMessage(event: IOnMessageEvent) {
        switch (event.data) {
            case 'stop':
                this.dispatch(serverDisconnect());
                break;
            case 'modelChanged':
                this.dispatch(serverModelChanged());
                break;
            default:
                break;
        }
    }
}
