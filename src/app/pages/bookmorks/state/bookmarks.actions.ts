import { props, createAction } from '@ngrx/store';

export const removeBookmark = createAction(
    '[Bookmarmark] Remove Bookmark',
    props<{ id: number }>(),
);