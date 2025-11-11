import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { App } from '../app';
const routes: Routes = [
{ path: '', component: App },
{ path: 'about', component: About}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}