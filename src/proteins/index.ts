import * as actions from './actions';
import { ProteinGLModel } from './components/ProteinGLModel';
import * as constants from './constants';
import { epic, epicActions } from './epic';
import { reducer } from './reducer';
import { IAnonymousProtein, IProtein } from './types';

export { actions, constants, epic, epicActions, IAnonymousProtein, IProtein, ProteinGLModel, reducer };
