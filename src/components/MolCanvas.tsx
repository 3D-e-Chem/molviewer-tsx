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
    // Handle window resizing
    window.addEventListener("resize", this.stage.handleResize, false)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.stage.handleResize)
  }

  private onCenter() {
    // autoView zooms/centers on visible and invisible representations
    // this.stage.autoView(1000)
    // below is an ugly workaround to that zooms/centers on only visible representations
    let currentBox: any
    const mystage: any = this.stage
    mystage.eachRepresentation((r: any) => {
      const selection = r.repr.selection
      if (r.repr.visible) {
        let boundingBox: any
        if ('structure' in r.parent) {
          boundingBox = r.parent.structure.getBoundingBox(selection)
        } else if ('shape' in r.parent) {
          boundingBox = r.parent.shape.boundingBox
        } else {
          // other representation parents are not supported
        }
        const transformedBox = boundingBox.clone().applyMatrix4(r.matrix)
        if (currentBox) {
          currentBox = currentBox.union(transformedBox)
        } else {
          currentBox = transformedBox
        }
      }
    })
    const center = currentBox.getCenter()
    const zoom = mystage.getZoomForBox(currentBox)
    mystage.animationControls.zoomMove(center, zoom, 1000)

    this.props.onCenterSucceeded()
  }

  private canvasRefHandler = (ref: Element) => {
    ref.id = this.props.id
  }
}
