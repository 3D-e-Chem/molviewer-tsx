import * as React from 'react';

export interface IGLModelProps {
    visible: boolean;
    data: string;
    format: string; // TODO use enum
}

interface IContext {
    viewer: $3Dmol.IGLViewer;
}

export class GLModel extends React.Component<IGLModelProps, {}> {
    protected model: $3Dmol.IGLModel;
    public context: IContext;

    static contextTypes = {
        viewer: React.PropTypes.object
    };

    public render() {
        this.context.viewer.render();
        return null;
    }

    public componentWillUnmount() {
        this.context.viewer.removeModel(this.model);
    }

    public shouldComponentUpdate(nextProps: IGLModelProps) {
        return this.props.visible !== nextProps.visible;
    }

    public componentDidUpdate() {
        if (this.props.visible) {
            this.model.show();
        } else {
            this.model.hide();
        }
        this.context.viewer.render();
    }

    public componentDidMount() {
        this.model = this.context.viewer.addModel(this.props.data, this.props.format);
        if (this.props.visible) {
            this.context.viewer.zoomTo();
            this.context.viewer.render();
        } else {
            this.model.hide();
        }
    }
}
