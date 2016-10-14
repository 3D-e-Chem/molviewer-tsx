import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { ThreeDmolViewerService } from './3dmol-viewer.service';
import { AppComponent } from './app.component';
import { LigandGLModels } from './ligand-glmodels.component';
import { LigandListComponent } from './ligand-list.component';
import { LigandService } from './ligand.service';
import { MolCanvasComponent } from './mol-canvas.component';
import { ProteinListComponent } from './protein-list.component';
import { SdfPdbViewerComponent } from './sdf-pdb-viewer.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        SdfPdbViewerComponent,
        LigandGLModels,
        LigandListComponent,
        ProteinListComponent,
        MolCanvasComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
    ],
    providers: [
        LigandService,
        ThreeDmolViewerService,
    ],
})
export class AppModule { }
