import * as React from 'react';

interface IProps {
    showAll(): void;
    hideAll(): void;
}

export const ListActions = ({showAll, hideAll}: IProps) => (
    <div className="btn-group btn-group-justified" role="group" aria-label="...">
        <div className="btn-group btn-group-xs" role="group">
            <button type="button" className="btn btn-default" onClick={showAll}>Show all</button>
        </div>
        <div className="btn-group btn-group-xs" role="group">
            <button type="button" className="btn btn-default" onClick={hideAll}>Hide all</button>
        </div>
    </div>
);
