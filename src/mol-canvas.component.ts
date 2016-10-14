import { Component, ElementRef, Inject, OnInit } from '@angular/core';

import { ThreeDmolViewerService } from './3dmol-viewer.service';

@Component({
    selector: 'mol-canvas',
    template: '',
})
export class MolCanvasComponent implements OnInit {
    private canvasContainerEl: Element;

    constructor(
        @Inject(ElementRef) elementRef: ElementRef,
        private viewer: ThreeDmolViewerService,
    ) {
        this.canvasContainerEl = elementRef.nativeElement;
    }

    public ngOnInit() {
        this.viewer.create(this.canvasContainerEl);
    }
}
