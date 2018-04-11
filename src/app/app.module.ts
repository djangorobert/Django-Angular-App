import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PopularComponent } from './Popular/popular';
import { PopularService } from './services/popularService';


@NgModule({
  declarations: [
    AppComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PopularService],
  bootstrap: [AppComponent]

})
export class AppModule { }
