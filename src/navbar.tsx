import { Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

import {serverDisconnect, serverModelChanged} from './actions/server';

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
        serverDisconnect: () => dispatch(serverDisconnect()),
        serverModelChanged: () => dispatch(serverModelChanged()),
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
                <a className="navbar-brand" href="#">{props.title}</a>
            </div>
            {debugButtons}
        </div>
    </nav>;
};

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarComp);
