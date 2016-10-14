import { $3Dmol } from '3Dmol';
import { Component, ElementRef, Inject, OnDestroy, OnInit } from '@angular/core';
import $ from 'jquery';
import { Subscription }   from 'rxjs/Subscription';

import { Ligand } from './ligand';
import { LigandService } from './ligand.service';

@Component({
    selector: 'mol-canvas',
    template: '',
})
export class MolCanvasComponent implements OnDestroy, OnInit {
    private canvasContainerEl: Element;
    private ligandFormat = 'sdf';
    private ligandModels = new Map<string, $3Dmol.GLModel>();
    private viewer: $3Dmol.GLViewer;
    private visibilitySubscription: Subscription;

    constructor(
        @Inject(ElementRef) elementRef: ElementRef,
        private ligandService: LigandService,
    ) {
        this.canvasContainerEl = elementRef.nativeElement;
    }

    public addLigand(ligand: Ligand) {
        const model = this.viewer.addModel(ligand.data, this.ligandFormat);
        model.setStyle({}, { stick: { colorscheme: 'greenCarbon' } });
        this.ligandModels.set(ligand.id, model);
    }

    public addLigands(ligands: Ligand[]) {
        ligands.forEach(this.addLigand.bind(this));
        this.visibilitySubscription = this.ligandService.visibilityAnnouncer$.subscribe(
            this.updateVisibility.bind(this),
            (e) => console.error(e),
        );

        this.viewer.zoomTo();
        this.viewer.render();
    }

    public getLigands() {
        this.ligandService.getLigands().then(this.addLigands.bind(this));
    }

    public createViewer(element: Element) {
        const jQelement = $(element);
        let config = {};
        this.viewer = $3Dmol.createViewer(jQelement, config);
        this.viewer.setBackgroundColor(0xffffff);
    }

    public updateVisibility(ligand: Ligand) {
        if (!this.ligandModels.has(ligand.id)) {
            return;
        }
        const model = this.ligandModels.get(ligand.id);
        if (ligand.visible) {
            model.show();
        } else {
            model.hide();
        }
        this.viewer.render();
    }

    public ngOnInit() {
        this.createViewer(this.canvasContainerEl);
        this.getLigands();
    }

    public ngOnDestroy() {
        this.visibilitySubscription.unsubscribe();
    }
}
