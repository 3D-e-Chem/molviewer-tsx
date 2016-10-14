import { Component } from '@angular/core';

import proteinListTemplate from './protein-list.component.html';
import { Protein, ProteinService} from './protein.service';

@Component({
    selector: 'protein-list',
    template: proteinListTemplate,
})
export class ProteinListComponent {
    private proteins: Protein[];

    constructor(private proteinService: ProteinService) {

    }

    public ngOnInit(): void {
        this.getProteins();
    }

    public getProteins() {
        this.proteinService.getProteins().then(proteins => this.proteins = proteins);
    }

    public onVisibilityClick(protein: Protein) {
        this.proteinService.toggleVisibility(protein);
    }

    public onHeteroVisibilityClick(protein: Protein) {
        this.proteinService.toggleHeteroVisibility(protein);
    }
}

