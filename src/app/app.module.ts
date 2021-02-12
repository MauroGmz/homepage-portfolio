import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProjectsComponent } from './projects/projects.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
