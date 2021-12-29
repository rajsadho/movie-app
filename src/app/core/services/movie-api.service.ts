import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Comment } from '../models/comment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MovieApiService {
  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  // Http header Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // GET: returns an Observable of all Movies
  getMovies() {
    return this.http.get<Movie>(this.apiUrl + '/movies')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // GET: returns an Observable of Movie
  getMovie(movieId: number) {
    return this.http.get<Movie>(this.apiUrl + '/movies/' + movieId)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // GET: returns an Observable of all Comments for a Movie
  getCommentsByMovie(movieId: number) {
    return this.http.get<Comment>(this.apiUrl + '/movies/' + movieId + '/comments')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // POST: add a new comment to the database 
  addHero(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.apiUrl + '/comments', JSON.stringify(comment), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // DELETE: remove a comment from the database
  deleteEmployee(commentId: number){
    return this.http.delete<Comment>(this.apiUrl + '/comments/' + commentId)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }

}