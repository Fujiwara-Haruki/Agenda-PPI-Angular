import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdicionaContatoComponent } from './adiciona-contato/adiciona-contato.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionaContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
