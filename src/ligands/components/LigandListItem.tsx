import * as React from 'react'

import { Button, ButtonGroup, DropdownButton, Glyphicon } from 'react-bootstrap'

import { EllipsisText } from '../../components/EllipsisText'
import { ILigand } from '../types'
import { ColorMenuItem } from './ColorMenuItem'

interface ILigandListItemProps extends ILigand {
  onVisibilityClick(id: string): void
  onColorClick(id: string, color: string): void
}

interface IState {
  menuOpen: boolean
}

const colors = ['#909090', '#32CD32', '#FF8C00']

export class LigandListItem extends React.Component<
  ILigandListItemProps,
  IState
> {
  state = {
    menuOpen: false
  }

  onVisibilityClick = () => {
    this.props.onVisibilityClick(this.props.id)
  }

  onColorClick = (color: string) => {
    this.props.onColorClick(this.props.id, color)
    this.onMenuToggle()
  }

  onMenuToggle = () => this.setState({ menuOpen: !this.state.menuOpen })

  render() {
    const { label, id, color, visible } = this.props
    const colorMenuItems = colors.map(c => (
      <ColorMenuItem
        key={c}
        checked={c === color}
        color={c}
        onClick={this.onColorClick}
      />
    ))
    return (
      <tr>
        <td className="item-label">
          <EllipsisText
            maxLength={32}
            text={label}
            tooltipId={'ligand-label-tooltip' + id}
          />
        </td>
        <td style={{ textAlign: 'right' }}>
          <ButtonGroup>
            <Button bsSize="small" onClick={this.onVisibilityClick}>
              <Glyphicon glyph={visible ? 'eye-open' : 'eye-close'} />
            </Button>
          </ButtonGroup>
          <DropdownButton
            pullRight={true}
            disabled={!visible}
            bsSize="small"
            id={id}
            title=""
            open={this.state.menuOpen}
            onToggle={this.onMenuToggle}
          >
            {colorMenuItems}
          </DropdownButton>
        </td>
      </tr>
    )
  }
}
