import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { BookmarksState } from './state/bookmarks.reduce';
import * as fromBoookmarksActions from '../bookmorks/state/bookmarks.actions';
import * as fromBookmarksSelectors from '../bookmorks/state/bookmarks.selectors';


@Component({
  selector: 'jv-bookmorks',
  templateUrl: './bookmorks.page.html',
  styleUrls: ['./bookmorks.page.scss']
})
export class BookmorksPage implements OnInit {

  bookmarks$: Observable<Bookmark[]>;

  constructor(private store: Store<BookmarksState>) {

   }
  
  ngOnInit() {
    this.bookmarks$ = this.store.pipe(select(fromBookmarksSelectors.selectBookmarksList));
  }

  removeBookmark(id: number) {
    this.store.dispatch(fromBoookmarksActions.removeBookmark({ id }));
  }

}
