import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";


import { MovieCommentsComponent } from './movie-comments/movie-comments.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    MovieCommentsComponent,
    MovieDetailsComponent,
    MoviesContainerComponent,
    MoviesListComponent
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MovieCommentsComponent,
    MovieDetailsComponent,
    MoviesContainerComponent,
    MoviesListComponent
  ]
})
export class MoviesModule { }