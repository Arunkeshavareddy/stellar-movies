import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MovieServerService } from './service/movie-server.service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [MovieServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
