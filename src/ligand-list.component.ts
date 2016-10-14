import { Component, OnInit } from '@angular/core';

import {Ligand} from './ligand';
import ligandListTemplate from './ligand-list.component.html';
import {LigandService} from './ligand.service';

@Component({
    providers: [LigandService],
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

    private getLigands() {
        this.ligandService.getLigands().then(ligands => this.ligands = ligands);
    }
}
