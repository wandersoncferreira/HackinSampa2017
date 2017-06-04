import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from "angularfire2";
import { MaterializeModule } from 'angular2-materialize';
import {MaterializeDirective} from "angular2-materialize";

import { AppComponent } from './app.component';
import { GraficoModule } from './grafico/grafico.module';
import { OrderByPipe } from './order-by.pipe';

export const environmentFireBase = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC_Wz3Rl_2wvrOhv8-i539r5rURIH3SZJk",
    authDomain: "hack-in-sampa.firebaseapp.com",
    databaseURL: "https://hack-in-sampa.firebaseio.com",
    projectId: "hack-in-sampa",
    storageBucket: "hack-in-sampa.appspot.com",
    messagingSenderId: "704557702260"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    MaterializeDirective,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GraficoModule,
    AngularFireModule.initializeApp(environmentFireBase.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
