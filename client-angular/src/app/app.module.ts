import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LegoIstruzioniComponent } from './lego-istruzioni/lego-istruzioni.component';

@NgModule({
  declarations: [
    AppComponent,
    LegoIstruzioniComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
