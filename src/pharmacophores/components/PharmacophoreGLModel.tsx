import { Component } from 'ngl';

import { GLModel, IGLModelProps } from '../../components/GLModel';

import { PharParser } from '../parser/PharParser';

export class PharmacophoreGLModel extends GLModel<IGLModelProps, {}> {

    public modelLoaded(comp: Component) {
        comp.addRepresentation('buffer', { opacity: 0.6});
        super.modelLoaded(comp);
    }

    public componentDidMount() {
        const streamer = {
            asText: () => this.props.data
        };
        const parser = new PharParser(streamer, {});
        const shape = parser.parse();
        const comp = this.context.stage.addComponentFromObject(shape, {});
        this.modelLoaded(comp);
    }
}
