import * as React from 'react';

import 'rc-slider/assets/index.css';
import Slider from 'rc-slider/lib/Slider';

import { ListActions } from '../../components/ListActions';
import { IProtein } from '../types';
import { ProteinListItem } from './ProteinListItem';

export interface IOwnProps {
    proteins: IProtein[];
}

export interface IDispatchProps {
    onPocketRadiusChange(radius: number): void;
    onProteinVisibilityClick(proteinId: string): void;
    onHeteroVisibilityClick(proteinId: string): void;
    onPocketVisibilityClick(proteinId: string): void;
    onShowAllClick(): void;
    onHideAllClick(): void;
}

type IProps = IOwnProps & IDispatchProps;

export const ProteinList = (props: IProps) => {
    let listactions: JSX.Element = <div/>;
    if (props.proteins.length > 1) {
        listactions = <ListActions hideAll={props.onHideAllClick} showAll={props.onShowAllClick}/>;
    }
    const proteins = props.proteins.map((protein) => (
        <ProteinListItem
            key={protein.id}
            {...protein}
            onProteinVisibilityClick={props.onProteinVisibilityClick}
            onPocketVisibilityClick={props.onPocketVisibilityClick}
            onHeteroVisibilityClick={props.onHeteroVisibilityClick}
        />
    ));

    function adjustPocketRadius(radius: number) {
        const label = document.getElementById('pocketRadius');
        if (label != null) {
            while (label.firstChild) {
                label.removeChild( label.firstChild );
            }
            label.appendChild(document.createTextNode('' + radius));
        }
        props.onPocketRadiusChange(radius);
    }

    return <div style={{ overflowY: 'auto'}}>
        <h5>Proteins</h5>
        <p>Pocket selection radius (Å): <span id="pocketRadius">5</span></p>
        <Slider min={3} max={10} step={0.5} defaultValue={5} onChange={adjustPocketRadius}/>
        {listactions}
        <table className="table table-condensed"><tbody>
            {proteins}
        </tbody></table>
    </div>;
};
