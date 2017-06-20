import { Component } from 'ngl';

import { GLModel, IGLModelProps } from '../../components/GLModel';

import { PharParser } from '../parser/PharParser';

interface IProps extends IGLModelProps {
    solid: boolean;
}

export class PharmacophoreGLModel extends GLModel<IProps, {}> {
    public modelLoaded(comp: Component) {
        super.modelLoaded(comp);
        this.setSolid();
    }

    public shouldComponentUpdate(nextProps: IProps) {
        return super.shouldComponentUpdate(nextProps) || this.props.solid !== nextProps.solid;
    }

    public componentDidUpdate() {
        super.componentDidUpdate();
        this.setSolid();
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

    private setSolid() {
        this.model.removeAllRepresentations();
        let opacity =  0.6;
        if (this.props.solid) {
            opacity = 1.0;
        }
        this.model.addRepresentation('buffer', { opacity });
    }
}
