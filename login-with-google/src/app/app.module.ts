import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';
import { SignoutComponent } from './components/signout/signout.component';

const config: FirebaseOptions = {
  apiKey: "AIzaSyANJzzxplzhTz54jNRWSwMpyUM4G9IlYx0",
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
    LoginComponent,
    SignoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'signout', component: SignoutComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
