import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// 
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoPageComponent } from './demo-page/demo-page.component';

import { ContentService } from './content.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
