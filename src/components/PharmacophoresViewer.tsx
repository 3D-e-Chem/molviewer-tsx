import * as React from 'react';

import { Layout } from '../components/Layout';
import { MolCanvas } from '../components/MolCanvas';
import { IPharmacophoreContainer, pharmacophoreFunctionalTypes } from '../pharmacophores';
import { Legend } from '../pharmacophores/components/Legend';
import { PharmacophoreContainerModel } from '../pharmacophores/components/PharmacophoreContainerModel';
import { PharmacophoreList } from '../pharmacophores/containers/PharmacophoreList';

export interface IStateProps {
    pharmacophores: IPharmacophoreContainer[];
    pocketRadius: number;
}

export interface IDispatchProps {
    fetchPharmacophores(): void;
    pageLoaded(): void;
}

export class PharmacophoresViewer extends React.Component<IStateProps & IDispatchProps, {}> {
    public componentDidMount() {
        this.props.fetchPharmacophores();
        this.props.pageLoaded();
    }

    public render() {
        const title = 'Pharmacophores viewer';
        const sidebar = [
            (
                <PharmacophoreList
                    key="list"
                    pharmacophores={this.props.pharmacophores}
                    pocketRadius={this.props.pocketRadius}
                />
            ),
            <Legend key="legend" types={pharmacophoreFunctionalTypes}/>
        ];
        const pharmacophores = this.props.pharmacophores.map((pharmacophore) => (
            <PharmacophoreContainerModel
                key={pharmacophore.id}
                pharmacophore={pharmacophore}
                pocketRadius={this.props.pocketRadius}
            />
        ));
        const main = (
            <MolCanvas id="canvas">
                {pharmacophores}
            </MolCanvas>
        );
        return <Layout title={title} sidebar={sidebar} main={main}/>;
    }
}
