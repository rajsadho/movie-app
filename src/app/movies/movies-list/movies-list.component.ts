import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieApiService } from 'src/app/core';
import { Movie } from 'src/app/core';

@Component({
    selector: 'movies-list',
    templateUrl: './movies-list.component.html'
})

export class MoviesListComponent implements OnInit{ 
    MovieList: Movie[] = [];

    movie: Movie | undefined;

    constructor(
      public restApi: MovieApiService
    ) { }
  
    ngOnInit() {
      console.log("Test");
      this.loadMovies();
    }
  
    loadMovies() {
      return this.restApi.getMovies().subscribe((data: {}) => {
        console.log(typeof(data))
        console.log(data);
        this.MovieList = data as Movie[];
        console.log(this.MovieList);
      })
    }

    @Output()
    rowClick = new EventEmitter();
    
    
    onclick(id: number) {
      this.rowClick.next(id);
    }
};