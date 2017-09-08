import * as NGL from 'ngl'

import { GLModel, IGLModelProps } from '../../components/GLModel'

interface IProps extends IGLModelProps {
  hetVisible: boolean
  pocketVisible: boolean
  pocketRadius: number
  proteinVisible: boolean
  hetColor: string
}

export class ProteinGLModel extends GLModel<IProps, {}> {
  protected model: NGL.StructureComponent
  private homo: NGL.RepresentationComponent
  private homeSelection: NGL.Selection = new NGL.Selection('not hetero')
  private hetero: NGL.RepresentationComponent
  private heteroSelection: NGL.Selection = new NGL.Selection(
    'hetero and not ( water or ion )'
  )
  private pocket: NGL.RepresentationComponent
  private pocketRadius: number

  public modelLoaded(comp: NGL.StructureComponent) {
    super.modelLoaded(comp)

    this.homo = this.model.addRepresentation('cartoon', {
      colorScheme: 'sstruc',
      sele: this.homeSelection
    })

    const heteroAtoms = this.model.structure.getAtomSet(this.heteroSelection)
    this.hetero = this.model.addRepresentation('licorice', {
      colorScheme: 'element',
      colorValue: this.props.hetColor,
      multipleBond: 'symmetric',
      sele: heteroAtoms.toSeleString()
    })
    if (this.props.pocketRadius !== this.pocketRadius) {
      this.definePocket(this.props.pocketRadius)
    }
  }

  public shouldComponentUpdate(nextProps: IProps) {
    const props = this.props as IProps
    return (
      super.shouldComponentUpdate(nextProps) ||
      props.proteinVisible !== nextProps.proteinVisible ||
      props.hetVisible !== nextProps.hetVisible ||
      props.pocketVisible !== nextProps.pocketVisible ||
      props.pocketRadius !== nextProps.pocketRadius ||
      props.hetColor !== nextProps.hetColor
    )
  }

  public componentDidUpdate() {
    const props = this.props as IProps
    this.homo.setVisibility(props.proteinVisible)
    this.hetero.setVisibility(props.hetVisible)
    this.hetero.setParameters({ colorValue: props.hetColor })

    if (props.pocketRadius !== this.pocketRadius) {
      this.definePocket(props.pocketRadius)
    }

    if (this.pocket) {
      this.pocket.setVisibility(props.pocketVisible)
    }

    super.componentDidUpdate()
  }

  private definePocket(radius: number) {
    this.pocketRadius = radius
    if (this.pocket != null) {
      this.pocket.setVisibility(false)
    }

    const heteroAtoms = this.model.structure.getAtomSet(this.heteroSelection)
    const pocketAtoms = this.model.structure.getAtomSetWithinSelection(
      this.heteroSelection,
      this.pocketRadius
    )
    const pocketResidues = this.model.structure.getAtomSetWithinGroup(
      pocketAtoms
    )
    this.pocket = this.model.addRepresentation('ball+stick', {
      colorScheme: 'element',
      colorValue: '#D9D9D9',
      multipleBond: 'symmetric',
      sele: pocketResidues.difference(heteroAtoms).toSeleString()
    })
  }
}
