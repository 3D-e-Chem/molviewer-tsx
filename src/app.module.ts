import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SdfPdbViewerComponent } from './sdf-pdb-viewer.component';
import { LigandListComponent } from './ligand-list.component';
import { ProteinListComponent } from './protein-list.component';
import { MolCanvasComponent } from './mol-canvas.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        SdfPdbViewerComponent,
        LigandListComponent,
        ProteinListComponent,
        MolCanvasComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }