import * as React from 'react';

export interface IGLModelProps {
    viewer: $3Dmol.IGLViewer;
    visible: boolean;
    data: string;
    format: string; // TODO use enum
}

export class GLModel extends React.Component<IGLModelProps, {}> {
    protected model: $3Dmol.IGLModel;

    public render() {
        this.props.viewer.render();
        return null;
    }

    public componentWillUnmount() {
        this.props.viewer.removeModel(this.model);
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
        this.props.viewer.render();
    }

    public componentDidMount() {
        this.model = this.props.viewer.addModel(this.props.data, this.props.format);
        if (this.props.visible) {
            this.props.viewer.zoomTo();
            this.props.viewer.render();
        } else {
            this.model.hide();
        }
    }
}
