import { Component, RepresentationComponent, Selection } from 'ngl';

import { GLModel, IGLModelProps } from '../../components/GLModel';
import { PharParser } from '../parser/PharParser';
import { pharmacophoreFunctionalTypes } from '../types';

interface IProps extends IGLModelProps {
    solid: boolean;
    shownTypes: string[];
}

const allTypes = pharmacophoreFunctionalTypes.map((t) => t.label);

export class PharmacophoreGLModel extends GLModel<IProps, {}> {
    reps: {[key: string]: RepresentationComponent} = {};

    public modelLoaded(comp: Component) {
        super.modelLoaded(comp);
        allTypes.forEach((t) => {
            const opacity = this.props.solid ? 1.0 : 0.6;
            this.reps[t] = this.model.addRepresentation('buffer', {
                opacity,
                // TODO figure out how to select all spheres/arrows with name===t
                sele: new Selection(t)
            });
            this.reps[t].setVisibility(this.props.shownTypes.indexOf(t) !== -1);
        });
    }

    public shouldComponentUpdate(nextProps: IProps) {
        return super.shouldComponentUpdate(nextProps) ||
            this.props.solid !== nextProps.solid ||
            this.props.shownTypes.join() !== nextProps.shownTypes.join()
        ;
    }

    public componentDidUpdate() {
        super.componentDidUpdate();
        allTypes.forEach((t) => {
            const opacity = this.props.solid ? 1.0 : 0.6;
            this.reps[t].setParameters({opacity});
            this.reps[t].setVisibility(this.props.shownTypes.indexOf(t) !== -1);
        });
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
