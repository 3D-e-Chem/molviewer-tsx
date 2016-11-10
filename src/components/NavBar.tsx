import * as React from 'react';

import { Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

import { actions } from '../sse';

interface IDispatchProps {
    serverDisconnect(): void;
    serverModelChanged(): void;
}

interface IComponentProps {
    title: string;
}

const mapStateToProps = (_state: {}, ownProps: IComponentProps) => (ownProps);
const mapDispatchToProps = (dispatch: any): IDispatchProps  => {
    return {
        serverDisconnect: () => dispatch(actions.serverDisconnect()),
        serverModelChanged: () => dispatch(actions.serverModelChanged())
    };
};

const developmentMode = true;

export const NavBarComp = (props: IDispatchProps & IComponentProps) => {
    let debugButtons = <div/>;
    if (developmentMode) {
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
    return <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <span className="navbar-brand">{props.title}</span>
            </div>
            {debugButtons}
        </div>
    </nav>;
};

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarComp);