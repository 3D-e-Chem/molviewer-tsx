import * as NGL from 'ngl';

import { GLModel, IGLModelProps} from '../../components/GLModel';

interface IProteinGLModelProps extends IGLModelProps {
    hetVisible: boolean;
    pocketVisible: boolean;
    pocketRadius: number;
}

export class ProteinGLModel extends GLModel<IProteinGLModelProps, {}> {
    protected model: NGL.StructureComponent;
    private hetero: NGL.RepresentationComponent;
    private heteroSelection: NGL.Selection;
    private pocket: NGL.RepresentationComponent;
    private pocketRadius: number;

    public modelLoaded(comp: NGL.StructureComponent) {
        super.modelLoaded(comp);
        this.model.addRepresentation('cartoon', {
            colorScheme: 'sstruc'
        });

        this.heteroSelection = new NGL.Selection( 'hetero and not ( water or ion )' );
        const heteroAtoms = this.model.structure.getAtomSet( this.heteroSelection );
        this.hetero = this.model.addRepresentation('licorice', {
            colorScheme: 'element',
            colorValue: '#FF8C00',
            multipleBond: 'symmetric',
            sele: heteroAtoms.toSeleString()
        });
        if (this.props.pocketRadius !== this.pocketRadius) {
            this.definePocket(this.props.pocketRadius);
        }
    }

    public shouldComponentUpdate(nextProps: IProteinGLModelProps) {
        const props = this.props as IProteinGLModelProps;
        return super.shouldComponentUpdate(nextProps) || props.hetVisible !== nextProps.hetVisible
            || props.pocketVisible !== nextProps.pocketVisible || props.pocketRadius !== nextProps.pocketRadius;
    }

    public componentDidUpdate() {
        const props = this.props as IProteinGLModelProps;
        this.hetero.setVisibility(props.hetVisible);

        if (props.pocketRadius !== this.pocketRadius) {
            this.definePocket(props.pocketRadius);
        }

        this.pocket.setVisibility(props.pocketVisible);

        super.componentDidUpdate();
    }

    private definePocket(radius: number) {
        this.pocketRadius = radius;
        if (this.pocket != null) {
            this.pocket.setVisibility(false);
        }

        const heteroAtoms = this.model.structure.getAtomSet( this.heteroSelection );
        const pocketAtoms = this.model.structure.getAtomSetWithinSelection( this.heteroSelection, this.pocketRadius );
        const pocketResidues = this.model.structure.getAtomSetWithinGroup( pocketAtoms );
        this.pocket = this.model.addRepresentation('ball+stick', {
            colorScheme: 'element',
            colorValue: '#D9D9D9',
            multipleBond: 'symmetric',
            sele: pocketResidues.new_difference(heteroAtoms).toSeleString()
        });
    }
}
