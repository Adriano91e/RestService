import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import {HttpClientModule} from "@angular/common/http";
import {PersonaService} from "./services/persona.service";


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
