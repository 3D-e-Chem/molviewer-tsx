import { put } from 'redux-saga/effects';

import { actions as ligands } from '../ligands';
import { actions as proteins } from '../proteins';
import { modelChangedWorker } from './sagas';

describe('modelChangedWorker', () => {
    it('should trigger reload of ligands', () => {
        const generator = modelChangedWorker();

        const result = generator.next();

        const expected = put(ligands.fetchRequested());
        expect(result.value).toContainEqual(expected);
    });

    it('should trigger reload of proteins', () => {
        const generator = modelChangedWorker();

        const result = generator.next();

        const expected = put(proteins.fetchRequested());
        expect(result.value).toContainEqual(expected);
    });
});
