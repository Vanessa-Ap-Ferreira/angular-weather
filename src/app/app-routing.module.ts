import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmorksPage } from './pages/bookmorks/bookmorks.page';
import { HomePage } from './pages/home/containers/home/home.page';


const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'bookmarks', component: BookmorksPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
