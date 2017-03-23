import * as React from 'react';

import { Button, Glyphicon } from 'react-bootstrap';

import { environment } from '../environment';

export interface IDispatchProps {
    serverDisconnect(): void;
    serverModelChanged(): void;
}

export interface IOwnProps {
    title: string;
}

export const NavBar = (props: IDispatchProps & IOwnProps) => {
    let debugButtons = <div/>;
    if (environment === 'development') {
        debugButtons = <div>
                <Button
                    onClick={props.serverModelChanged}
                    className="navbar-btn navbar-right"
                    title="Refresh"
                >
                    <Glyphicon glyph="refresh"/>
                </Button>
                <Button
                    onClick={props.serverDisconnect}
                    className="navbar-btn navbar-right"
                    title="Disconnect"
                >
                    <Glyphicon glyph="ban-circle"/>
                </Button>
            </div>;
    }
    return <nav className="navbar navbar-default" style={{marginBottom:0, borderRadius: '0px'}}>
        <div className="container-fluid">
            <div className="navbar-header">
                <span className="navbar-brand">{props.title}</span>
            </div>
            {debugButtons}
        </div>
    </nav>;
};
