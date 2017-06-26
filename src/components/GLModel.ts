import * as React from 'react';

import * as NGL from 'ngl';
import { Matrix4 } from 'three';

export interface IGLModelProps {
    visible: boolean;
    data: string;
    format: string;
    transform?: number[];
}

export interface IContext {
    stage: NGL.Stage;
}

export class GLModel<P extends IGLModelProps, S> extends React.Component<P, S> {
    static contextTypes = {
        stage: React.PropTypes.object
    };

    public context: IContext;
    protected model: NGL.Component;

    public render() {
        return null;
    }

    public componentWillUnmount() {
        this.context.stage.remove(this.model);
    }

    public shouldComponentUpdate(nextProps: P) {
        return this.props.visible !== nextProps.visible;
    }

    public componentDidUpdate() {
        this.model.setVisibility(this.props.visible);
    }

    public modelLoaded(comp: NGL.Component) {
        this.model = comp;
        const transform: number[] | undefined = this.props.transform;
        if (transform) {
            const matrix = new Matrix4().fromArray(transform).transpose();
            this.model.setTransform(matrix);
        }
        this.model.setVisibility(this.props.visible);
        if (this.props.visible) {
            this.model.autoView();
        }
    }

    public componentDidMount() {
        const blob = new Blob([this.props.data], { type: 'text/plain'});
        this.context.stage.loadFile(blob, { ext: this.props.format})
            .then(this.modelLoaded.bind(this));
    }
}
