import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';

const config: FirebaseOptions = {
  apiKey: "",
  authDomain: "combinador-e59ef.firebaseapp.com",
  databaseURL: "https://combinador-e59ef.firebaseio.com",
  projectId: "combinador-e59ef",
  storageBucket: "combinador-e59ef.appspot.com",
  messagingSenderId: "sender-id",
  appID: "app-id",
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
