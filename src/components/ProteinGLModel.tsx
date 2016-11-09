import { GLModel, IGLModelProps} from './GLModel';

interface IProteinGLModelProps extends IGLModelProps {
    hetVisible: boolean;
}

export class ProteinGLModel extends GLModel {
    private hetStyle = { stick: { colorscheme: 'orangeCarbon' } };

    public componentDidMount() {
        super.componentDidMount();
        this.model.setStyle({ cartoon: { colorscheme: { map: $3Dmol.ssColors.Jmol, prop: 'ss' } } });
        this.model.setStyle({ hetflag: true }, this.hetStyle);
        this.props.viewer.render();
    }

    public shouldComponentUpdate(nextProps: IProteinGLModelProps) {
        const props = this.props as IProteinGLModelProps;
        return super.shouldComponentUpdate(nextProps) || props.hetVisible !== nextProps.hetVisible;
    }

    public componentDidUpdate() {
        const props = this.props as IProteinGLModelProps;
        if (props.hetVisible) {
            this.model.setStyle({ hetflag: true }, this.hetStyle);
        } else {
            this.model.setStyle({ hetflag: true }, {});
        }
        super.componentDidUpdate();
    }
}
