import { $3Dmol } from '3Dmol';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ThreeDmolViewerService } from './3dmol-viewer.service';
import { Ligand } from './ligand';
import { LigandService } from './ligand.service';

@Component({
    selector: 'ligand-glmodels',
    template: '',
})
export class LigandGLModels implements OnDestroy, OnInit {
    private format = 'sdf';
    private models = new Map<string, $3Dmol.GLModel>();
    private visibilitySubscription: Subscription;

    constructor(
        private store: LigandService,
        private viewer: ThreeDmolViewerService,
    ) {
    }

    public ngOnInit() {
        this.getLigands();
    }

    public addLigand(ligand: Ligand) {
        const model = this.viewer.addModel(ligand.data, this.format);
        model.setStyle({}, { stick: { colorscheme: 'greenCarbon' } });
        this.models.set(ligand.id, model);
    }

    public addLigands(ligands: Ligand[]) {
        ligands.forEach(this.addLigand.bind(this));

        this.visibilitySubscription = this.store.visibilityAnnouncer$.subscribe(
            this.updateVisibility.bind(this),
            (e) => console.error(e),
        );

        this.viewer.zoomTo();
        this.viewer.render();
    }

    public getLigands() {
        this.store.getLigands().then(this.addLigands.bind(this));
    }

    public updateVisibility(ligand: Ligand) {
        if (!this.models.has(ligand.id)) {
            return;
        }
        const model = this.models.get(ligand.id);
        if (ligand.visible) {
            model.show();
        } else {
            model.hide();
        }
        this.viewer.render();
    }

    public ngOnDestroy() {
        this.visibilitySubscription.unsubscribe();
    }
}
