import { GLModel, IGLModelProps} from '../../components/GLModel';

interface IProteinGLModelProps extends IGLModelProps {
    hetVisible: boolean;
}

export class ProteinGLModel extends GLModel {
    private hetero: NGL.RepresentationComponent;

    public modelLoaded() {
        super.modelLoaded();
        this.model.addRepresentation('cartoon', {
            colorScheme: 'sstruc'
        });
        this.hetero = this.model.addRepresentation('licorice', {
            sele: 'hetero and not ( water or ion )',
            colorScheme: 'element',
            colorValue: '#FF8C00',
            multipleBond: 'symmetric'
        });
    }

    public shouldComponentUpdate(nextProps: IProteinGLModelProps) {
        const props = this.props as IProteinGLModelProps;
        return super.shouldComponentUpdate(nextProps) || props.hetVisible !== nextProps.hetVisible;
    }

    public componentDidUpdate() {
        const props = this.props as IProteinGLModelProps;
        this.hetero.setVisibility(props.hetVisible);
        super.componentDidUpdate();
    }
}
