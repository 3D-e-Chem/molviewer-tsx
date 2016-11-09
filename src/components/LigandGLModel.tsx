import { GLModel} from './GLModel';

export class LigandGLModel extends GLModel {
    public componentDidMount() {
        super.componentDidMount();
        this.model.setStyle({}, { stick: { colorscheme: 'greenCarbon' } });
        this.props.viewer.render();
    }
}
