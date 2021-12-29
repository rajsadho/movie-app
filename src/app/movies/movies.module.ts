import { NgModule } from '@angular/core';
import { MovieCommentsComponent } from './movie-comments/movie-comments.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MoviesListComponent } from './movies-list/movies-list.component';


@NgModule({
  declarations: [
    MovieCommentsComponent,
    MovieDetailsComponent,
    MoviesContainerComponent,
    MoviesListComponent
  ],
  imports: [
  ],
  exports: [
    MovieCommentsComponent,
    MovieDetailsComponent,
    MoviesContainerComponent,
    MoviesListComponent
  ]
})
export class MoviesModule { }