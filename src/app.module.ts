import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { ThreeDmolViewerService } from './3dmol-viewer.service';
import { AppComponent } from './app.component';
import { LigandGLModels } from './ligand-glmodels.component';
import { LigandListComponent } from './ligand-list.component';
import { LigandService } from './ligand.service';
import { MolCanvasComponent } from './mol-canvas.component';
import { ProteinGLModels } from './protein-glmodels.component';
import { ProteinListComponent } from './protein-list.component';
import { ProteinService} from './protein.service';
import { SdfPdbViewerComponent } from './sdf-pdb-viewer.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        SdfPdbViewerComponent,
        LigandGLModels,
        LigandListComponent,
        ProteinGLModels,
        ProteinListComponent,
        MolCanvasComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
    ],
    providers: [
        LigandService,
        ProteinService,
        ThreeDmolViewerService,
    ],
})
export class AppModule { }
