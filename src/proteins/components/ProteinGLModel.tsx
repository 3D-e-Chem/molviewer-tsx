import * as NGL from 'ngl';

import { GLModel, IGLModelProps} from '../../components/GLModel';

interface IProteinGLModelProps extends IGLModelProps {
    hetVisible: boolean;
    pocketVisible: boolean;
}

export class ProteinGLModel extends GLModel {
    private hetero: NGL.RepresentationComponent;
    private pocket: NGL.RepresentationComponent;

    public modelLoaded(comp: NGL.StructureComponent) {
        super.modelLoaded(comp);
        this.model.addRepresentation('cartoon', {
            colorScheme: 'sstruc'
        });

        const heteroSelection = new NGL.Selection( 'hetero and not ( water or ion )' );
        const heteroAtoms = this.model.structure.getAtomSet( heteroSelection );
        this.hetero = this.model.addRepresentation('licorice', {
            sele: heteroAtoms.toSeleString(),
            colorScheme: 'element',
            colorValue: '#FF8C00',
            multipleBond: 'symmetric'
        });

        // ToDo: link selectionRadius to a slider or input box
        const selectionRadius = 5;
        const pocketAtoms = this.model.structure.getAtomSetWithinSelection( heteroSelection, selectionRadius );
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
            || props.pocketVisible !== nextProps.pocketVisible;
    }

    public componentDidUpdate() {
        const props = this.props as IProteinGLModelProps;
        this.hetero.setVisibility(props.hetVisible);
        this.pocket.setVisibility(props.pocketVisible);
        super.componentDidUpdate();
    }
}
