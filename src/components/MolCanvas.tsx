import * as React from 'react';

interface IMolCanvasProps {
    id: string;
    children?: React.ReactNode[];
}

export class MolCanvas extends React.Component<IMolCanvasProps, {}> {
    private viewer: NGL.Stage;

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
        const config = { backgroundColor: 'white' };
        this.viewer = new NGL.Stage(this.props.id, config);
    }

    private canvasRefHandler(ref: Element) {
        ref.id = this.props.id;
    }
}
