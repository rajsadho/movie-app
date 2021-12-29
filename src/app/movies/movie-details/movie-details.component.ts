import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { map, throttleTime, filter, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Movie, MovieApiService } from 'src/app/core';

@Component({
    selector: 'movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
    constructor(
        private route: ActivatedRoute, 
        public restApi: MovieApiService
    ) {}

    movie: Movie | undefined;
    routeID: number | undefined;

    ngOnInit() {
        console.log('Hello');
        this.route.params.subscribe((params) => {
            this.routeID = params['id'];
            this.loadMovie(params['id']);
        });        
    }
  
    get movieID() {
      return this.route.params.pipe(map(({ id }) => 
        this.loadMovie(+id),
        console.log('hello' + this.movie)
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