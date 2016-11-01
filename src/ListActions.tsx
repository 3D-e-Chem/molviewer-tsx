import * as React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

interface IProps {
    showAll(): void;
    hideAll(): void;
}

export const ListActions = ({showAll, hideAll}: IProps) => (
    <ButtonGroup justified>
        <ButtonGroup>
            <Button onClick={showAll}>
                Show all
            </Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button  onClick={hideAll}>
                Hide all
            </Button>
        </ButtonGroup>
    </ButtonGroup>
);
