import * as React from 'react';
import { Glyphicon, Modal } from 'react-bootstrap';

interface IProps {
    connected: boolean;
}

export const DisconnectedModal = ({connected}: IProps) => (
    // once disconnected it is not possible to reconnect
    // so modal is not closable, call dummy function on onHide
    <Modal
        bsSize='large'
        show={!connected}
        enforceFocus={true}
        onHide={() => ({})}
        >
        <Modal.Header >
            <Modal.Title style={{ 'font-size': '3.5em' }}>
                <Glyphicon glyph='exclamation-sign' style={{ 'vertical-align': 'text-top' }} />
                <span>Disconnected from KNIME</span>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>This visualization is no longer active.</p>
            <p>Open view of KNIME node to get new fresh visualization.</p>
        </Modal.Body>
    </Modal>
);
