import * as React from 'react';

export interface IGLModelProps {
    visible: boolean;
    data: string;
    format: string; // TODO use enum
}

interface IContext {
    viewer: NGL.Stage;
}

export class GLModel extends React.Component<IGLModelProps, {}> {
    protected model: NGL.StructureComponent;
    public context: IContext;

    static contextTypes = {
        viewer: React.PropTypes.object
    };

    public render() {
        return null;
    }

    public componentWillUnmount() {
        this.context.viewer.remove(this.model);
    }

    public shouldComponentUpdate(nextProps: IGLModelProps) {
        return this.props.visible !== nextProps.visible;
    }

    public componentDidUpdate() {
        this.model.setVisibility(this.props.visible);
    }

    public modelLoaded() {
        this.model.setVisibility(this.props.visible);
        if (this.props.visible) {
            this.model.centerView();
        }
    }

    public componentDidMount() {
        const blob = new Blob([this.props.data], { type: 'text/plain'});
        this.context.viewer.loadFile(blob, { ext: this.props.format}).then(comp => {
            this.model = comp;
            this.modelLoaded();
        });
    }
}
