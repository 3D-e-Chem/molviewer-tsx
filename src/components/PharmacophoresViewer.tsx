import * as React from 'react'

import { Layout } from '../components/Layout'
import { MolCanvas } from '../containers/MolCanvas'
import {
  IPharmacophoreContainer,
  IPharmacophoreFunctionalType
} from '../pharmacophores'
import { Legend } from '../pharmacophores/components/Legend'
import { PharmacophoreContainerModel } from '../pharmacophores/components/PharmacophoreContainerModel'
import { PharmacophoreList } from '../pharmacophores/containers/PharmacophoreList'

interface IPharmacophores {
  items: IPharmacophoreContainer[]
  types: IPharmacophoreFunctionalType[]
}

export interface IStateProps {
  pharmacophores: IPharmacophores
  pocketRadius: number
}

export interface IDispatchProps {
  fetchPharmacophores(): void
  pageLoaded(): void
  onToggleType(label: string): void
}

export type IProps = IStateProps & IDispatchProps

export class PharmacophoresViewer extends React.Component<IProps, {}> {
  public componentDidMount() {
    this.props.fetchPharmacophores()
    this.props.pageLoaded()
  }

  public render() {
    const title = 'Pharmacophores viewer'
    const sidebar = [
      <PharmacophoreList
        key="list"
        pharmacophores={this.props.pharmacophores.items}
        pocketRadius={this.props.pocketRadius}
      />,
      <Legend
        key="legend"
        types={this.props.pharmacophores.types}
        onToggleType={this.props.onToggleType}
      />
    ]
    const shownTypes = this.props.pharmacophores.types
      .filter(t => t.checked)
      .map(t => t.label)
    const pharmacophores = this.props.pharmacophores.items.map(
      pharmacophore => (
        <PharmacophoreContainerModel
          key={pharmacophore.id}
          pharmacophore={pharmacophore}
          pocketRadius={this.props.pocketRadius}
          shownTypes={shownTypes}
        />
      )
    )
    const main = <MolCanvas id="canvas">{pharmacophores}</MolCanvas>
    return <Layout title={title} sidebar={sidebar} main={main} />
  }
}
