import * as React from 'react';

import { ListActions } from '../../components/ListActions';
import { PocketRadius } from '../../pocketradius';
import { IPharmacophore } from '../types';
import { PharmacophoreListItem } from './PharmacophoreListItem';

export interface IOwnProps {
    pharmacophores: IPharmacophore[];
    pocketRadius: number;
}

export interface IDispatchProps {
    onPocketRadiusChange(radius: number): void;
    onProteinVisibilityClick(id: string): void;
    onLigandVisibilityClick(id: string): void;
    onPocketVisibilityClick(id: string): void;
    onPharmacophoreVisibilityClick(id: string): void;
    onShowAllClick(): void;
    onHideAllClick(): void;
}

type IProps = IOwnProps & IDispatchProps;

export const PharmacophoreList = (props: IProps) => {
    let listactions: JSX.Element = <div/>;
    if (props.pharmacophores.length > 1) {
        listactions = <ListActions hideAll={props.onHideAllClick} showAll={props.onShowAllClick}/>;
    }
    const items = props.pharmacophores.map((phar) => (
        <PharmacophoreListItem
            key={phar.id}
            {...phar}
            onProteinVisibilityClick={props.onProteinVisibilityClick}
            onPocketVisibilityClick={props.onPocketVisibilityClick}
            onLigandVisibilityClick={props.onLigandVisibilityClick}
            onPharmacophoreVisibilityClick={props.onPharmacophoreVisibilityClick}
        />
    ));
    return (
        <div style={{ overflowY: 'auto'}}>
            <h5>Pharmacophores</h5>
            <PocketRadius value={props.pocketRadius} onChange={props.onPocketRadiusChange}/>
            {listactions}
            <table className="table table-condensed"><tbody>
                {items}
            </tbody></table>
        </div>
    );
};