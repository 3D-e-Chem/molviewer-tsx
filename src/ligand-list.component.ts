import { Component, OnInit } from '@angular/core';

import {Ligand} from './ligand';
import ligandListTemplate from './ligand-list.component.html';
import {LigandService} from './ligand.service';

@Component({
    selector: 'ligand-list',
    template: ligandListTemplate,
})
export class LigandListComponent implements OnInit {
    private ligands: Ligand[];

    constructor(private ligandService: LigandService) {

    }

    public ngOnInit(): void {
        this.getLigands();
    }

    public getLigands() {
        this.ligandService.getLigands().then(ligands => this.ligands = ligands);
    }

    public onVisibilityClick(ligand: Ligand) {
        this.ligandService.toggleVisibility(ligand);
    }
}
