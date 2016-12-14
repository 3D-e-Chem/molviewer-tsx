import * as React from 'react';

import { DisconnectedModal } from '../sse/containers/DisconnectedModal';
import { NavBar } from './NavBar';

import './Layout.css';

export interface IProps {
    title: string;
    sidebar: JSX.Element | JSX.Element[];
    main: JSX.Element;
}

export const Layout = ({title, sidebar, main}: IProps) => (
    <div className="full-screen">
        <NavBar title={title}/>
        <DisconnectedModal/>
        <div className="wrapper">
            <div className="sidebar">
                {sidebar}
            </div>
            <div className="main">
                {main}
            </div>
        </div>
    </div>
);
