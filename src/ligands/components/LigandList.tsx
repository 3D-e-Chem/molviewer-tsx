import * as React from 'react'

import { ListActions } from '../../components/ListActions'
import { ILigand } from '../types'
import { LigandListItem } from './LigandListItem'

export interface IOwnProps {
  ligands: ILigand[]
}

export interface IDispatchProps {
  onVisibilityClick(id: string): void
  onColorClick(id: string, color: string): void
  onHideAllClick(): void
  onHiLiteShownClick(ids: string[]): void
  onShowAllClick(): void
}

export type IProps = IOwnProps & IDispatchProps

const style: React.CSSProperties = { height: '100%', overflowY: 'auto' }

export const LigandList = ({
  ligands,
  onVisibilityClick,
  onColorClick,
  onShowAllClick,
  onHideAllClick
}: IProps) => {
  let listactions: JSX.Element = <div />
  if (ligands.length > 1) {
    listactions = (
      <ListActions hideAll={onHideAllClick} showAll={onShowAllClick} />
    )
  }
  const ligandItems = ligands.map(ligand => (
    <LigandListItem
      key={ligand.id}
      {...ligand}
      onVisibilityClick={onVisibilityClick}
      onColorClick={onColorClick}
    />
  ))
  return (
    <div style={style}>
      <h5>Ligands</h5>
      {listactions}
      <table className="table table-condensed">
        <tbody>{ligandItems}</tbody>
      </table>
    </div>
  )
}
