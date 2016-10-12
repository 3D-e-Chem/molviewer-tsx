import { $3Dmol } from '3Dmol';
import * as React from 'react';

interface IGLModelProps {
    viewer: $3Dmol.GLViewer;
    visible: boolean;
    data: string;
    format: string; // TODO use enum
}

interface IProteinGLModelProps extends IGLModelProps {
    hetVisible: boolean;
}

export class GLModel extends React.Component<IGLModelProps, {}> {
    protected model: $3Dmol.GLModel;

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
        this.props.viewer.zoomTo();
        this.props.viewer.render();
    }
}

export class LigandGLModel extends GLModel {
    public componentDidMount() {
        super.componentDidMount();
        this.model.setStyle({}, { stick: { colorscheme: 'greenCarbon' } });
        this.props.viewer.render();
    }
}

export class ProteinGLModel extends GLModel {
    private hetStyle = { stick: { colorscheme: 'orangeCarbon' } };

    public componentDidMount() {
        super.componentDidMount();
        this.model.setStyle({ cartoon: { colorscheme: { map: $3Dmol.ssColors.Jmol, prop: 'ss' } } });
        this.model.setStyle({ hetflag: true }, this.hetStyle);
        this.props.viewer.render();
    }

    public shouldComponentUpdate(nextProps: IProteinGLModelProps) {
        const props = this.props as IProteinGLModelProps;
        return super.shouldComponentUpdate(nextProps) || props.hetVisible !== nextProps.hetVisible;
    }

    public componentDidUpdate() {
        const props = this.props as IProteinGLModelProps;
        if (props.hetVisible) {
            this.model.setStyle({ hetflag: true }, this.hetStyle);
        } else {
            this.model.setStyle({ hetflag: true }, {});
        }
        super.componentDidUpdate();
    }
}
