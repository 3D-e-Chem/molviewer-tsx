import * as React from 'react';
import { Glyphicon, MenuItem } from 'react-bootstrap';

import { EmptyGlyphIcon } from '../../components/EmptyGlyphIcon';

export interface IProps {
    checked: boolean;
    color: string;
    onClick(color: string): void;
}

export class ColorMenuItem extends React.Component<IProps, {}> {
    onClick = () => this.props.onClick(this.props.color);

    render() {
        const {color, checked} = this.props;
        const style = {
            backgroundColor: color,
            display: 'inline-block',
            height: '1em',
            width: '7em'
        };
        return (
            <MenuItem
                key={color}
                onClick={this.onClick}
            >
                {checked ? <Glyphicon glyph="ok"/> : <EmptyGlyphIcon/>}
                &nbsp;
                <span style={style}/>
            </MenuItem>
        );
    }
}
