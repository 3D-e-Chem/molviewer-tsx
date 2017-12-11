import * as React from 'react'

import * as NGL from 'ngl'

export interface IOwnProps {
  id: string
  children?: React.ReactNode[]
}

export interface IStateProps {
  center: boolean
}

export interface IDispatchProps {
  onCenterSucceeded(): void
}

export type IProps = IOwnProps & IStateProps & IDispatchProps

export class MolCanvas extends React.Component<IProps, {}> {
  static childContextTypes = {
    stage: React.PropTypes.object
  }
  public stage: NGL.Stage

  getChildContext() {
    return { stage: this.stage }
  }

  render() {
    return (
      <div style={{ height: '100%' }} ref={this.canvasRefHandler}>
        {this.props.children}
      </div>
    )
  }

  componentDidUpdate() {
    if (this.props.center) {
      this.onCenter()
    }
  }

  componentDidMount() {
    const config = { backgroundColor: 'white' }
    this.stage = new NGL.Stage(this.props.id, config)
  }

  private onCenter() {
    // autoView zooms/centers on visible and invisible representations
    // TODO zooms/centers on only visible representations
    this.stage.autoView(1000)
    this.props.onCenterSucceeded()
  }

  private canvasRefHandler = (ref: Element) => {
    ref.id = this.props.id
  }
}
