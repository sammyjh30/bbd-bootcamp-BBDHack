import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// 
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoPageComponent } from './demo-page/demo-page.component';

import { ContentService } from './content.service';
import { AddComponent } from './add/add.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DemoPageComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
