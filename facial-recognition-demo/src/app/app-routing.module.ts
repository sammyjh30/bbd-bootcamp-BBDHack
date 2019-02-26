import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoPageComponent } from './demo-page/demo-page.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: DemoPageComponent},
  {path: 'add', component: AddComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
