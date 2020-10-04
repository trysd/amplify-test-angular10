import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

/* new form imports */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* configure app with AmplifyUIAngularModule */
    AmplifyUIAngularModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

/* <!--

M:amplify-app yasu$ node -v
v12.16.1

M:amplify-app yasu$ npm -v
6.14.8

$ npm install -g @aws-amplify/cli
$ amplify configure
$ amplify configure
$ ng new amplify-app
$ cd amplify-app
$ amplify init
$ npm install --save aws-amplify @aws-amplify/ui-angular
$ npm install
$ ng serve --open
$ amplify add auth
$ amplify push
$ amplify console
$ git add .
$ git commit -m "compleat auth"
$ history

--> */
