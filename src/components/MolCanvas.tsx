import * as React from 'react'
import * as PropTypes from 'prop-types'

import * as NGL from 'ngl'

export interface IProps {
  id: string
  children?: React.ReactNode[]
}

const style: React.CSSProperties = { height: '100%' }

export class MolCanvas extends React.Component<IProps, {}> {
  static childContextTypes = {
    stage: PropTypes.object
  }
  private stage: NGL.Stage

  constructor() {
    super()
    this.canvasRefHandler = this.canvasRefHandler.bind(this)
  }

  getChildContext() {
    return { stage: this.stage }
  }

  render() {
    return (
      <div style={style} ref={this.canvasRefHandler}>
        {this.props.children}
      </div>
    )
  }

  componentDidMount() {
    const config = { backgroundColor: 'white' }
    this.stage = new NGL.Stage(this.props.id, config)
  }

  private canvasRefHandler(ref: Element | null) {
    if (ref !== null) {
      ref.id = this.props.id
    }
  }
}
