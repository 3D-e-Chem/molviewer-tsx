import * as React from 'react';

import { DisconnectedModal } from '../sse/components/DisconnectedModal';
import { NavBar } from './NavBar';

interface IProps {
    title: string;
    sidebar: JSX.Element;
    main: JSX.Element;
}

export const Layout = ({title, sidebar, main}: IProps) => (
    <div>
        <NavBar title={title}/>
        <DisconnectedModal/>
        <div style={{ display: 'flex', height: '900px' }}>
            <div style={{ marginLeft: '10px', width: '300px' }}>
                {sidebar}
            </div>
            <div style={{ flexGrow: 1, position: 'relative' }}>
                {main}
            </div>
        </div>
    </div>
);
