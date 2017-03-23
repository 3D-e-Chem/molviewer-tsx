import * as React from 'react';

import 'rc-slider/assets/index.css';
import Slider from 'rc-slider/lib/Slider';

export interface IStateProps {
    value: number;
}

export interface IDispatchProps {
    onChange(radius: number): void;
}

type IProps = IStateProps & IDispatchProps;

export const PocketRadius = (props: IProps) => {
    return <div>
        <p>Pocket selection radius (Å): <span>{props.value}</span></p>
        <div style={{'padding-left': 7, 'padding-right': 7}}>
            <Slider min={2.5} max={10} step={0.5} value={props.value} onChange={props.onChange}/>
        </div>
    </div>;
};
