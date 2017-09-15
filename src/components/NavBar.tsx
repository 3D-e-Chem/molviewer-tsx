import * as React from 'react'

import { Button, Glyphicon, OverlayTrigger, Popover } from 'react-bootstrap'

export interface IDispatchProps {
  serverDisconnect(): void
  serverModelChanged(): void
}

export interface IOwnProps {
  title: string
}

export type IProps = IDispatchProps & IOwnProps

export const NavBar = (props: IProps) => {
  let debugButtons: JSX.Element[] = []
  if (process.env.NODE_ENV === 'development') {
    debugButtons = [
      <Button
        key="refresh"
        onClick={props.serverModelChanged}
        className="navbar-btn navbar-right"
        title="Refresh"
      >
        <Glyphicon glyph="refresh" />
      </Button>,
      <Button
        key="disconnect"
        onClick={props.serverDisconnect}
        className="navbar-btn navbar-right"
        title="Disconnect"
      >
        <Glyphicon glyph="ban-circle" />
      </Button>
    ]
  }
  const helpPopover = (
    <Popover id="help" title="Help">
      <span>Mouse controls:</span>
      <ul>
        <li>Left button hold and move to rotate camera around center.</li>
        <li>Left button click to pick atom.</li>
        <li>Middle button hold and move to zoom camera in and out.</li>
        <li>Middle button click to center camera on atom.</li>
        <li>
          Right button hold and move to translate camera in the screen plane.
        </li>
      </ul>
    </Popover>
  )
  return (
    <nav
      className="navbar navbar-default"
      style={{ marginBottom: 0, borderRadius: '0px' }}
    >
      <div className="container-fluid">
        <div className="navbar-header">
          <span className="navbar-brand">{props.title}</span>
        </div>
        <div>
          {debugButtons}
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={helpPopover}
            rootClose={true}
          >
            <Button title="Help" className="navbar-btn navbar-right">
              <b>?</b>
            </Button>
          </OverlayTrigger>
        </div>
      </div>
    </nav>
  )
}
