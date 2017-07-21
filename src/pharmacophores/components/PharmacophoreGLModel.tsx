import { Component, RepresentationComponent, Shape } from 'ngl';

import { GLModel, IGLModelProps } from '../../components/GLModel';
import { PharParser } from '../parser/PharParser';

export interface IProps extends IGLModelProps {
    solid: boolean;
    shownTypes: string[];
}

export class PharmacophoreGLModel extends GLModel<IProps, {}> {
    models = new Map<string, Component>();
    reps = new Map<string, RepresentationComponent>();

    public shouldComponentUpdate(nextProps: IProps) {
        return super.shouldComponentUpdate(nextProps) ||
            this.props.solid !== nextProps.solid ||
            this.props.shownTypes.join() !== nextProps.shownTypes.join()
        ;
    }

    public componentDidUpdate() {
        const opacity = this.props.solid ? 1.0 : 0.6;
        this.reps.forEach((rep, type) => {
            rep.setParameters({opacity});
            const shown = this.props.visible && this.props.shownTypes.indexOf(type) !== -1;
            rep.setVisibility(shown);
            const model = this.models.get(type);
            if (model) {
                model.setVisibility(shown);
            }
        });
    }

    public componentWillUnmount() {
        this.models.forEach((model) => {
            this.context.stage.remove(model);
        });
    }

    processShape = (shape: Shape, type: string) => {
        const model = this.context.stage.addComponentFromObject(shape, {});
        this.models.set(type, model);
        this.applyTransform(model);
        const opacity = this.props.solid ? 1.0 : 0.6;
        const rep = model.addRepresentation('buffer', {opacity});
        const shown = this.props.visible && this.props.shownTypes.indexOf(type) !== -1;
        model.setVisibility(shown);
        rep.setVisibility(shown);
        this.reps.set(type, rep);
    }

    public componentDidMount() {
        const streamer = {
            asText: () => this.props.data
        };
        const parser = new PharParser(streamer, {});
        const shapes = parser.parse();
        shapes.forEach(this.processShape);
    }
}
