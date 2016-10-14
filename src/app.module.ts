import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SdfPdbViewerComponent } from './sdf-pdb-viewer.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        SdfPdbViewerComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }