import { actions as toastrActions } from 'react-redux-toastr';
import { put } from 'redux-saga/effects';

import { actions as ligandsActions} from './ligands';
import { fetchFailedWorker } from './mainSaga';

describe('fetchFailedWorker', () => {
    it('should return toastr error message on ligands fetch failure', () => {
        const action = ligandsActions.fetchFailed('Server is offline');
        const generator = fetchFailedWorker(action);

        const result = generator.next();
        const expected = put(toastrActions.add({
            message: 'Server is offline',
            title: 'Unable to fetch molecules from server',
            type: 'error'
        }));
        expect(result.value).toEqual(expected);
    });
});
