import { connect } from 'react-redux';

import { DisconnectedModal as DisconnectedModalComponent, IProps } from '../components/DisconnectedModal';

const mapStateToProps = (state: IProps) => state;
const mapDispatchToProps = () => ({});
export const DisconnectedModal = connect(mapStateToProps, mapDispatchToProps)(DisconnectedModalComponent);
