import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SnippetComponent} from "./snippet/snippet.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'snippet/:slug',
    component: SnippetComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
