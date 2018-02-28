import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing'
import {HttpParams} from "@angular/common/http";
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot([]),
	HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

	}
