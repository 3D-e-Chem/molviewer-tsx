import * as React from 'react';

import { ListActions } from '../../components/ListActions';
import { IProtein } from '../types';
import { PocketRadius } from './PocketRadius';
import { ProteinListItem } from './ProteinListItem';

export interface IOwnProps {
    proteins: IProtein[];
    pocketRadius: number;
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

    return <div style={{ overflowY: 'auto'}}>
        <h5>Proteins</h5>
        <PocketRadius value={props.pocketRadius} onChange={props.onPocketRadiusChange}/>
        {listactions}
        <table className="table table-condensed"><tbody>
            {proteins}
        </tbody></table>
    </div>;
};
