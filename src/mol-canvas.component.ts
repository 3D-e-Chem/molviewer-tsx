import { $3Dmol } from '3Dmol';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import $ from 'jquery';


@Component({
    selector: 'mol-canvas',
    template: '',
})
export class MolCanvasComponent implements OnInit {
    private canvasContainerEl: Element;
    private viewer: $3Dmol.GLViewer;

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.canvasContainerEl = elementRef.nativeElement;
    }

    public ngOnInit() {
        const element = $(this.canvasContainerEl);
        let config = {};
        this.viewer = $3Dmol.createViewer(element, config);
        this.viewer.setBackgroundColor(0xffffff);
        this.viewer.addSphere({ color: 'green', radius: 10 });
        this.viewer.zoomTo();
        this.viewer.render();
        this.viewer.zoom(0.8, 2000);
    }
}
