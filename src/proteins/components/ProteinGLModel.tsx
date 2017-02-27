import * as NGL from 'ngl';

import { GLModel, IGLModelProps} from '../../components/GLModel';

interface IProteinGLModelProps extends IGLModelProps {
    hetVisible: boolean;
    pocketUpdated: boolean;
    pocketVisible: boolean;
    selectionRadius: number;
}

export class ProteinGLModel extends GLModel {
    private hetero: NGL.RepresentationComponent;
    private heteroSelection: NGL.Selection;
    private pocket: NGL.RepresentationComponent;
    private selectionRadius: number;

    public modelLoaded(comp: NGL.StructureComponent) {
        super.modelLoaded(comp);
        this.model.addRepresentation('cartoon', {
            colorScheme: 'sstruc'
        });

        this.heteroSelection = new NGL.Selection( 'hetero and not ( water or ion )' );
        const heteroAtoms = this.model.structure.getAtomSet( this.heteroSelection );
        this.hetero = this.model.addRepresentation('licorice', {
            sele: heteroAtoms.toSeleString(),
            colorScheme: 'element',
            colorValue: '#FF8C00',
            multipleBond: 'symmetric'
        });
        this.definePocket(5);
    }

    private definePocket(radius: number) {
        this.selectionRadius = radius;
        if (this.pocket != null) {
            this.pocket.setVisibility(false);
        }

        const heteroAtoms = this.model.structure.getAtomSet( this.heteroSelection );
        const pocketAtoms = this.model.structure.getAtomSetWithinSelection( this.heteroSelection, this.selectionRadius );
        const pocketResidues = this.model.structure.getAtomSetWithinGroup( pocketAtoms );
        this.pocket = this.model.addRepresentation('ball+stick', {
            sele: pocketResidues.new_difference(heteroAtoms).toSeleString(),
            colorScheme: 'element',
            colorValue: '#D9D9D9',
            multipleBond: 'symmetric'
        });
    }

    public shouldComponentUpdate(nextProps: IProteinGLModelProps) {
        const props = this.props as IProteinGLModelProps;
        return super.shouldComponentUpdate(nextProps) || props.hetVisible !== nextProps.hetVisible
            || props.pocketVisible !== nextProps.pocketVisible || props.selectionRadius !== nextProps.selectionRadius;
    }

    public componentDidUpdate() {
        const props = this.props as IProteinGLModelProps;
        this.hetero.setVisibility(props.hetVisible);

        if (props.pocketUpdated) {
            this.definePocket(props.selectionRadius);
        }

        this.pocket.setVisibility(props.pocketVisible);

        super.componentDidUpdate();
    }
}
