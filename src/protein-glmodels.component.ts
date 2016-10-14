import { $3Dmol } from '3Dmol';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ThreeDmolViewerService } from './3dmol-viewer.service';
import { Protein, ProteinService } from './protein.service';

@Component({
    selector: 'protein-glmodels',
    template: '',
})
export class ProteinGLModels implements OnDestroy, OnInit {
    private format = 'pdb';
    private models = new Map<string, $3Dmol.GLModel>();
    private visibilitySubscription: Subscription;
    private heteroVisibilitySubscription: Subscription;
    private hetStyle = { stick: { colorscheme: 'orangeCarbon' } };

    constructor(
        private store: ProteinService,
        private viewer: ThreeDmolViewerService,
    ) {
    }

    public ngOnInit() {
        this.getProteins();
    }

    public addProtein(protein: Protein) {
        const model = this.viewer.addModel(protein.data, this.format);
        model.setStyle({ cartoon: { colorscheme: { map: $3Dmol.ssColors.Jmol, prop: 'ss' } } });
        model.setStyle({ hetflag: true }, this.hetStyle);
        this.models.set(protein.id, model);
    }

    public addProteins(proteins: Protein[]) {
        proteins.forEach(this.addProtein.bind(this));

        this.visibilitySubscription = this.store.visibilityAnnouncer$.subscribe(
            this.updateVisibility.bind(this),
            (e) => console.error(e),
        );
        this.heteroVisibilitySubscription = this.store.heteroVisibilityAnnouncer$.subscribe(
            this.updateHeteroVisibility.bind(this),
            (e) => console.error(e),
        );
        this.viewer.zoomTo();
        this.viewer.render();
    }

    public getProteins() {
        this.store.getProteins().then(this.addProteins.bind(this));
    }

    public updateVisibility(protein: Protein) {
        if (!this.models.has(protein.id)) {
            return;
        }
        const model = this.models.get(protein.id);
        if (protein.visible) {
            model.show();
        } else {
            model.hide();
        }
        this.viewer.render();
    }

    public updateHeteroVisibility(protein: Protein) {
        if (!this.models.has(protein.id)) {
            return;
        }
        const model = this.models.get(protein.id);
        if (protein.hetVisible) {
            model.setStyle({ hetflag: true }, this.hetStyle);
        } else {
            model.setStyle({ hetflag: true }, {});
        }
        this.viewer.render();
    }

    public ngOnDestroy() {
        this.visibilitySubscription.unsubscribe();
        this.heteroVisibilitySubscription.unsubscribe();
    }
}
