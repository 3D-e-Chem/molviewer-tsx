/* tslint:disable */

/* import all svg files as strings */
declare module '*.svg' {
  const __path__: string
  export default __path__
}

declare module 'rc-slider*'
declare module 'rc-util*'

// Type definitions for Server-Sent Events
// Specification: http://dev.w3.org/html5/eventsource/
// Definitions by: Yannik Hampe <https://github.com/yankee42
// Downloaded from: https://github.com/yankee42/typescript-server-sent-events

/** The readyState attribute represents the state of the connection. */
declare enum ReadyState {
  /** The connection has not yet been established, or it was closed and the user agent is reconnecting. */
  CONNECTING = 0,

  /** The user agent has an open connection and is dispatching events as it receives them. */
  OPEN = 1,

  /** The connection is not open, and the user agent is not trying to reconnect.
     * Either there was a fatal error or the close() method was invoked.
     */
  CLOSED = 2
}

declare class EventSource extends EventTarget {
  /** The serialisation of this EventSource object's url. */
  public url: string
  public withCredentials: boolean
  /** Always 0 */
  public CONNECTING: ReadyState
  /** Always 1 */
  public OPEN: ReadyState
  /** Always 2 */
  public CLOSED: ReadyState
  /** The ready state of the underlying connection. */
  public readyState: ReadyState
  public onopen: (event: Event) => any
  public onmessage: (event: IOnMessageEvent) => void
  public onerror: (event: Event) => any
  /** The close() method must abort any instances of the fetch algorithm started for this EventSource object,
     * and must set the readyState attribute to CLOSED.
     */
  public close: () => void
  constructor(url: string, eventSourceInitDict?: IEventSourceInit)
}

interface IEventSourceInit {
  /** Defines if request should set corsAttributeState to true.  */
  withCredentials?: boolean
}

interface IOnMessageEvent {
  data: string
}
// End of Type definitions for Server-Sent Events

// @types/jest v15.1.32 is missing toContainEqual
declare namespace jest {
  interface Matchers {
    toContainEqual(expected: any): void
  }
}
