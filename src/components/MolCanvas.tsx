import * as React from 'react';

interface IMolCanvasProps {
    children?: React.ReactNode[];
}

export class MolCanvas extends React.Component<IMolCanvasProps, {}> {
    private canvasContainerEl: Element;
    private viewer: $3Dmol.IGLViewer;

    static childContextTypes = {
        viewer: React.PropTypes.object
    };

    constructor() {
        super();
        this.canvasRefHandler = this.canvasRefHandler.bind(this);
    }

    getChildContext() {
        return {viewer: this.viewer};
    }

    render() {
        return <div style={{ height: '100%', width: '100%' }} ref={this.canvasRefHandler}>
            {this.props.children}
        </div>;
    }

    componentDidMount() {
        const element = jQuery(this.canvasContainerEl);
        const config = {};
        this.viewer = $3Dmol.createViewer(element, config);
        this.viewer.setBackgroundColor(0xffffff);
        this.viewer.render();
    }

    private canvasRefHandler(ref: Element) {
        this.canvasContainerEl = ref;
    }
}
