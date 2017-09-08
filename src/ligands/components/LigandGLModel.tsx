import * as NGL from 'ngl'

import { GLModel, IGLModelProps } from '../../components/GLModel'

export interface IProps extends IGLModelProps {
  color: string
}

export class LigandGLModel extends GLModel<IProps, {}> {
  public representation: NGL.RepresentationComponent

  public modelLoaded(comp: NGL.StructureComponent) {
    super.modelLoaded(comp)
    this.representation = this.model.addRepresentation('licorice', {
      colorScheme: 'element',
      colorValue: this.props.color,
      multipleBond: 'symmetric'
    })
  }

  public shouldComponentUpdate(nextProps: IProps) {
    const props = this.props as IProps
    return (
      super.shouldComponentUpdate(nextProps) || props.color !== nextProps.color
    )
  }

  public componentDidUpdate() {
    const props = this.props as IProps
    this.representation.setParameters({ colorValue: props.color })
    super.componentDidUpdate()
  }
}
