import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { MovieCommentsComponent } from './movie-comments/movie-comments.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  declarations: [
    MovieCommentsComponent,
    MovieDetailsComponent,
    MoviesContainerComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatSidenavModule,
    MatCardModule
  ],
  exports: [
    MovieCommentsComponent,
    MovieDetailsComponent,
    MoviesContainerComponent,
    MoviesListComponent
  ]
})
export class MoviesModule { }