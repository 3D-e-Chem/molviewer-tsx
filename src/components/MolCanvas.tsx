import * as React from 'react';

interface IMolCanvasProps {
    id: string;
    children?: React.ReactNode[];
}

export class MolCanvas extends React.Component<IMolCanvasProps, {}> {
    private stage: NGL.Stage;

    static childContextTypes = {
        stage: React.PropTypes.object
    };

    constructor() {
        super();
        this.canvasRefHandler = this.canvasRefHandler.bind(this);
    }

    getChildContext() {
        return {stage: this.stage};
    }

    render() {
        return <div style={{ height: '100%' }} ref={this.canvasRefHandler}>
            {this.props.children}
        </div>;
    }

    componentDidMount() {
        const config = { backgroundColor: 'white' };
        this.stage = new NGL.Stage(this.props.id, config);
    }

    private canvasRefHandler(ref: Element) {
        ref.id = this.props.id;
    }
}
