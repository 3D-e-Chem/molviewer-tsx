import * as React from 'react'

import { Accordion, ListGroup, Panel } from 'react-bootstrap'

import { IPharmacophoreFunctionalType } from '../types'
import { LegendItem } from './LegendItem'

interface IProps {
  types: IPharmacophoreFunctionalType[]
  onToggleType(label: string): void
}

const accordionStyle = { marginBottom: 5 }

export const Legend = ({ onToggleType, types }: IProps) => {
  const items = types.map(d => (
    <LegendItem key={d.label} {...d} onToggle={onToggleType} />
  ))
  return (
    <Accordion style={accordionStyle}>
      <Panel header="Functional types" defaultExpanded={true}>
        <ListGroup fill={true}>{items}</ListGroup>
      </Panel>
    </Accordion>
  )
}
