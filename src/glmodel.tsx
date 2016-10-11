import {$3Dmol} from '3Dmol';
import * as React from 'react';

interface ILigandGLModelProps {
    viewer: $3Dmol.GLViewer;
    visible: boolean;
    data: string;
    format: string; // TODO use enum
}

interface ILigandGLModelState {}

export class LigandGLModel extends React.Component<ILigandGLModelProps, ILigandGLModelState> {
    private model: $3Dmol.GLModel;

    public render() {
        this.props.viewer.render();
        return null;
    }

    public componentDidMount() {
        this.model = this.props.viewer.addModel(this.props.data, this.props.format);
        // TODO style from props
        this.model.setStyle({}, {stick: {colorscheme: 'greenCarbon'}});
        this.props.viewer.zoomTo();
        this.props.viewer.render();
    }

    public componentWillUnmount() {
        this.props.viewer.removeModel(this.model);
    }

    public shouldComponentUpdate(nextProps: ILigandGLModelProps) {
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
}
