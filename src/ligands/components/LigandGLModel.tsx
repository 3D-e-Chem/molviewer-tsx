import * as NGL from 'ngl';

import { GLModel } from '../../components/GLModel';

export class LigandGLModel extends GLModel {
    public modelLoaded(comp: NGL.StructureComponent) {
        super.modelLoaded(comp);
        this.model.addRepresentation('licorice', {
            colorScheme: 'element',
            colorValue: '#32CD32',
            multipleBond: 'symmetric'
        });
    }
}
