import { expect } from 'chai';
import 'mocha';

import { Http } from '@angular/http';

import { Protein, ProteinService } from './protein.service';

describe('ProteinService', () => {
    describe('toggleVisibility()', () => {
        it('should toggle visible property', () => {
            const httpMock = {} as Http;
            const service = new ProteinService(httpMock);
            const protein: Protein = {
                data: 'data1',
                hetVisible: true,
                id: '1',
                label: 'label1',
                visible: true,
            };

            service.toggleVisibility(protein);

            expect(protein.visible).to.equals(false);
        });
    });
});
