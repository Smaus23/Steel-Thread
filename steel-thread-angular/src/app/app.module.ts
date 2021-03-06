import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing'
import {HttpParams} from "@angular/common/http";
import { URLSearchParams } from '@angular/http';
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
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

	}
