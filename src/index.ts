import 'reflect-metadata';
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'bootstrap/dist/css/bootstrap.css!';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);