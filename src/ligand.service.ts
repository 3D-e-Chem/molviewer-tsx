import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Ligand, RestLigand } from './ligand';

function prepLigand(restLigand: RestLigand) {
  const ligand = restLigand as Ligand;
  ligand.visible = true;
  return ligand;
}

@Injectable()
export class LigandService {
    private ligandsUrl = '/api/ligands';

    constructor(private http: Http) {

    }

    public getLigands(): Promise<Ligand[]> {
        return this.http.get(this.ligandsUrl)
            .toPromise()
            .then(response => response.json() as RestLigand[])
            .then(restLigands => restLigands.map(prepLigand));
    }

    public toggleVisibility(ligand: Ligand) {
        ligand.visible = !ligand.visible;
    }
}
