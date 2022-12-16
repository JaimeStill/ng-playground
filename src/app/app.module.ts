import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  RouteComponents,
  Routes
} from './routes';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CdkModule } from './cdk.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';

import { Components } from './components';
import { Dialogs } from './dialogs';
import { Directives } from './directives';
import { Forms } from './forms';
import { Pipes } from './pipes';
import { Sheets } from './sheets';

@NgModule({
  declarations: [
    AppComponent,
    ...Components,
    ...Dialogs,
    ...Directives,
    ...Forms,
    ...Pipes,
    ...RouteComponents,
    ...Sheets
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CdkModule,
    MaterialModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
