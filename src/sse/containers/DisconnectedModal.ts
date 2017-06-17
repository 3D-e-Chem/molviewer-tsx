import { connect } from 'react-redux';

import { DisconnectedModal as DisconnectedModalComponent, IProps } from '../components/DisconnectedModal';

const mapStateToProps = (state: IProps) => state;
export const DisconnectedModal = connect(mapStateToProps)(DisconnectedModalComponent) as React.ComponentClass<{}>;
