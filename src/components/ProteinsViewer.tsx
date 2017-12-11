import * as React from 'react'

import * as proteins from '../proteins'

import { Layout } from '../components/Layout'
import { MolCanvas } from '../containers/MolCanvas'
import { ProteinGLModel } from '../proteins/components/ProteinGLModel'
import { ProteinList } from '../proteins/containers/ProteinList'

export interface IStateProps {
  proteins: proteins.IProtein[]
  pocketRadius: number
}

export interface IDispatchProps {
  fetchProteins(): void
  pageLoaded(): void
}

export type IProps = IStateProps & IDispatchProps

export class ProteinsViewer extends React.Component<IProps, {}> {
  public componentDidMount() {
    this.props.fetchProteins()
    this.props.pageLoaded()
  }

  public render() {
    const title = 'Proteins viewer'
    const sidebar = [
      <ProteinList
        key="proteins"
        proteins={this.props.proteins}
        pocketRadius={this.props.pocketRadius}
      />
    ]
    const proteins = this.props.proteins.map(protein => (
      <ProteinGLModel
        key={protein.id}
        {...protein}
        pocketRadius={this.props.pocketRadius}
        hetColor="#FF8C00"
      />
    ))
    const main = <MolCanvas id="canvas">{proteins}</MolCanvas>
    return <Layout title={title} sidebar={sidebar} main={main} />
  }
}
