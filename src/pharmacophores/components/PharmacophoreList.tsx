import * as React from 'react';

import { Button } from 'react-bootstrap';

import { ListActions } from '../../components/ListActions';
import { PocketRadius } from '../../pocketradius';
import { IPharmacophoreContainer } from '../types';
import { PharmacophoreListItem } from './PharmacophoreListItem';

export interface IOwnProps {
    pharmacophores: IPharmacophoreContainer[];
    pocketRadius: number;
}

export interface IDispatchProps {
    onPocketRadiusChange(radius: number): void;
    onProteinVisibilityClick(id: string): void;
    onLigandVisibilityClick(id: string): void;
    onPocketVisibilityClick(id: string): void;
    onPharmacophoreVisibilityClick(id: string): void;
    onPharmacophoreContainerVisibilityClick(id: string): void;
    onPharmacophoreSolidClick(id: string): void;
    onShowAllClick(): void;
    onHideAllClick(): void;
    onHiLiteShownClick(): void;
}

type IProps = IOwnProps & IDispatchProps;

const style: React.CSSProperties = { height: '100%', overflowY: 'auto'};

export const PharmacophoreList = (props: IProps) => {
    let listactions: JSX.Element = <div/>;
    if (props.pharmacophores.length > 1) {
        listactions = (
            <ListActions hideAll={props.onHideAllClick} showAll={props.onShowAllClick}>
                <Button
                    onClick={props.onHiLiteShownClick}
                    title="Make currently shown pharmacophores the hilite selection in KNIME"
                >
                    HiLite shown
                </Button>
            </ListActions>
        );
    }
    const items = props.pharmacophores.map((phar) => (
        <PharmacophoreListItem
            key={phar.id}
            {...phar}
            onProteinVisibilityClick={props.onProteinVisibilityClick}
            onPocketVisibilityClick={props.onPocketVisibilityClick}
            onLigandVisibilityClick={props.onLigandVisibilityClick}
            onPharmacophoreVisibilityClick={props.onPharmacophoreVisibilityClick}
            onPharmacophoreContainerVisibilityClick={props.onPharmacophoreContainerVisibilityClick}
            onPharmacophoreSolidClick={props.onPharmacophoreSolidClick}
        />
    ));
    return (
        <div style={style}>
            <h5>Pharmacophores</h5>
            <PocketRadius value={props.pocketRadius} onChange={props.onPocketRadiusChange}/>
            {listactions}
            <table className="table table-condensed"><tbody>
                {items}
            </tbody></table>
        </div>
    );
};
