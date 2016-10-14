import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LigandListComponent } from './ligand-list.component';
import { MolCanvasComponent } from './mol-canvas.component';
import { ProteinListComponent } from './protein-list.component';
import { SdfPdbViewerComponent } from './sdf-pdb-viewer.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        SdfPdbViewerComponent,
        LigandListComponent,
        ProteinListComponent,
        MolCanvasComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
    ],
})
export class AppModule { }
