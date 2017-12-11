import * as React from 'react'

import * as ligands from '../ligands'

import { Layout } from '../components/Layout'
import { MolCanvas } from '../containers/MolCanvas'
import { LigandGLModel } from '../ligands/components/LigandGLModel'
import { LigandList } from '../ligands/containers/LigandList'

export interface IStateProps {
  ligands: ligands.ILigand[]
}

export interface IDispatchProps {
  fetchLigands(): void
  pageLoaded(): void
}

export type IProps = IStateProps & IDispatchProps

export class LigandsViewer extends React.Component<IProps, {}> {
  public componentDidMount() {
    this.props.fetchLigands()
    this.props.pageLoaded()
  }

  public render() {
    const title = 'Ligands viewer'
    const sidebar = <LigandList key="ligands" ligands={this.props.ligands} />
    const ligands = this.props.ligands.map(ligand => (
      <LigandGLModel key={ligand.id} {...ligand} />
    ))

    const main = <MolCanvas id="canvas">{ligands}</MolCanvas>
    return <Layout title={title} sidebar={sidebar} main={main} />
  }
}
