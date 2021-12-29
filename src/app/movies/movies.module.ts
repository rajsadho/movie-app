import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { MovieCommentsComponent } from './movie-comments/movie-comments.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MovieCommentsComponent,
    MovieDetailsComponent,
    MoviesContainerComponent,
    MoviesListComponent,
    MatIconModule
  ]
})
export class MoviesModule { }