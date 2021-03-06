import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviesContainerComponent } from './movies/movies-container/movies-container.component';

const routes: Routes = [
  {
    path: "movies",
    component: MoviesContainerComponent,
    children: [
    {
      path: ":id",
      component: MovieDetailsComponent
    }]
  },
  { path: "**", redirectTo: "movies" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
