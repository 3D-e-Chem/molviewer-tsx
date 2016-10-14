import { $3Dmol } from '3Dmol';
import { Injectable } from '@angular/core';
import $ from 'jquery';

@Injectable()
export class ThreeDmolViewerService {
    private viewer: $3Dmol.GLViewer;

    public create(element: Element) {
        const jQelement = $(element);
        let config = {};
        this.viewer = $3Dmol.createViewer(jQelement, config);
        this.viewer.setBackgroundColor(0xffffff);
        return this.viewer;
    }

    public addModel(data: string, format: string) {
        return this.viewer.addModel(data, format);
    }

    public zoomTo() {
        this.viewer.zoomTo();
        return this.viewer;
    }

    public render() {
        this.viewer.render();
        return this.viewer;
    }
}
