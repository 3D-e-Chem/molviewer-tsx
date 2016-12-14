import * as React from 'react';

import * as NGL from 'ngl';

export interface IGLModelProps {
    visible: boolean;
    data: string;
    format: string; // TODO use enum
}

interface IContext {
    stage: NGL.Stage;
}

export class GLModel extends React.Component<IGLModelProps, {}> {
    protected model: NGL.StructureComponent;
    public context: IContext;

    static contextTypes = {
        stage: React.PropTypes.object
    };

    public render() {
        return null;
    }

    public componentWillUnmount() {
        this.context.stage.remove(this.model);
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
            // TODO center on whole stage instead of model
            this.model.centerView();
        }
    }

    public componentDidMount() {
        const blob = new Blob([this.props.data], { type: 'text/plain'});
        this.context.stage.loadFile(blob, { ext: this.props.format}).then(comp => {
            this.model = comp;
            this.modelLoaded();
        });
    }
}
