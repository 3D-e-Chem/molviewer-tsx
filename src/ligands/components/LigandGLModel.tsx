import { GLModel} from '../../components/GLModel';

export class LigandGLModel extends GLModel {
    public modelLoaded() {
        super.modelLoaded();
        this.model.addRepresentation('licorice', {
            colorScheme: 'element',
            colorValue: '#32CD32',
            multipleBond: 'symmetric'
        });
    }
}
