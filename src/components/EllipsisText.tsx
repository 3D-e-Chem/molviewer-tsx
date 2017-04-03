import * as React from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

interface IProps {
    text: string;
    maxLength: number;
    tooltipId: string;
    placement?: string;
}

export const EllipsisText = ({text, maxLength, tooltipId, placement = 'right'}: IProps) => {
        if (text.length < maxLength) {
            return <span>{text}</span>;
        }
        const tooltip = <Tooltip id={tooltipId}>{text}</Tooltip>;
        return (
            <span>
                <span>{text.substr(0, maxLength)}</span>
                <OverlayTrigger placement={placement} overlay={tooltip}><span>…</span></OverlayTrigger>
            </span>
        );
};
