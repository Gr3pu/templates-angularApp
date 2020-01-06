import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { AreasModule } from './areas/areas.module';
import { ComponentsModule } from './components/components.module';
import { BaseRoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // base
    BrowserModule,
    // external
    NgbModule,

    // submodules
    ComponentsModule,
    AreasModule,

    // always in the end
    BaseRoutingModule
  ],
  providers: [],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }
