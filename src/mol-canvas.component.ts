import { $3Dmol } from '3Dmol';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import $ from 'jquery';

import {Ligand} from './ligand';
import {LigandService} from './ligand.service';

@Component({
    providers: [LigandService],
    selector: 'mol-canvas',
    template: '',
})
export class MolCanvasComponent implements OnInit {
    private canvasContainerEl: Element;
    private ligandFormat = 'sdf';
    private ligandModels: $3Dmol.GLModel[];
    private viewer: $3Dmol.GLViewer;

    constructor(
        @Inject(ElementRef) elementRef: ElementRef,
        private ligandService: LigandService,
    ) {
        this.canvasContainerEl = elementRef.nativeElement;
    }

    public addLigand(ligand: Ligand) {
        const model = this.viewer.addModel(ligand.data, this.ligandFormat);
        model.setStyle({}, { stick: { colorscheme: 'greenCarbon' } });
        return model;
    }

    public addLigands(ligands: Ligand[]) {
        this.ligandModels = ligands.map(this.addLigand.bind(this)) as $3Dmol.GLModel[];
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

    public ngOnInit() {
        this.createViewer(this.canvasContainerEl);
        this.getLigands();
    }
}
