import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { bookmarkReducer } from './state/bookmarks.reduce';
import { BookmorksPage } from './bookmorks.page';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
  ],
  declarations: [
    BookmorksPage
  ],
})
export class BookmorksModule { 
}
