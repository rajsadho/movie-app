import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { map, throttleTime, filter, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Movie, MovieApiService } from 'src/app/core';

@Component({
    selector: 'movie-details',
    templateUrl: './movie-details.component.html'
})
export class MovieDetailsComponent {
    constructor(
        private route: ActivatedRoute, 
        public restApi: MovieApiService
    ) {}

    movie: Movie | undefined;

    ngOnInit() {}
  
    get movieID() {
      return this.route.params.pipe(map(({ id }) => 
        this.loadMovie(+id),
        console.log(this.movie)
      ));
    }

    loadMovie(id: number) {
        return this.restApi.getMovie(id).subscribe((data: {}) => {
          console.log(typeof(data))
          console.log(data);
          this.movie = data as Movie;
          console.log(this.movie);
        })
      }
};