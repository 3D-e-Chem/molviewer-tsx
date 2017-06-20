import * as React from 'react';

import { Button, ButtonGroup } from 'react-bootstrap';

interface IProps {
    children?: React.ReactNode[];
    hideAll(): void;
    showAll(): void;
}

export const ListActions = (props: IProps) => {
    return (
        <ButtonGroup bsSize="small">
            <Button onClick={props.showAll}>Show all</Button>
            <Button onClick={props.hideAll}>Hide all</Button>
            {props.children}
        </ButtonGroup>
    );
};
