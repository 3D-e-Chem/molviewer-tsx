import { Injectable } from '@angular/core';

import {Ligand} from './ligand';

@Injectable()
export class LigandService {
    public getLigands(): Promise<Ligand[]> {
        return Promise.resolve([{
            data: '.data.data.',
            id: 'mol1',
            label: 'Molecule1',
            visible: true,
        }]);
    }
}