import * as React from 'react';

interface IProps {
    showAll(): void;
    hideAll(): void;
    children?: React.ReactNode[];
}

export const ListActions = (props: IProps) => {
    return <div className="btn-group btn-group-justified" role="group" aria-label="...">
        <div className="btn-group btn-group-xs" role="group">
            <button type="button" className="btn btn-default" onClick={props.showAll}>Show all</button>
        </div>
        <div className="btn-group btn-group-xs" role="group">
            <button type="button" className="btn btn-default" onClick={props.hideAll}>Hide all</button>
        </div>
        {props.children}
    </div>;
};
