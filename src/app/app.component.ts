import { Component } from '@angular/core';
import { MovieApiService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-app';


  // Movies: any = [];

  // constructor(
  //   public restApi: MovieApiService
  // ) { }

  // ngOnInit() {
  //   this.loadMovies();
  // }

  // loadMovies() {
  //   return this.restApi.getMovies().subscribe((data: {}) => {
  //     this.Movies = data;
  //     console.log(this.Movies);
  //   })
  // }
}
