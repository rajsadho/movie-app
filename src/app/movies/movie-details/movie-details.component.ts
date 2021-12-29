import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Movie, Comment, MovieApiService } from 'src/app/core';

@Component({
    selector: 'movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
     constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private restApi: MovieApiService
    ) {}

    submitted = false;
    registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        text: ['', Validators.required]
    });

    comments: Comment[] = [];
    movie: Movie | undefined;
    routeID: number | undefined;
    newComment: Object = {};

    ngOnInit() {
        console.log('Hello');
        this.route.params.subscribe((params) => {
            this.routeID = params['id'];
            this.loadMovie(params['id']);
            this.loadComments(params['id']);
        });     
    }

    loadMovie(id: number) {
        return this.restApi.getMovie(id).subscribe((data: {}) => {
          console.log(typeof(data))
          console.log(data);
          this.movie = data as Movie;
          console.log(this.movie);
        })
    }

    loadComments(id: number) {
        return this.restApi.getCommentsByMovie(id).subscribe((data: {}) => {
            console.log(typeof(data))
            console.log(data);
            this.comments = data as Comment[];
            console.log('Comments',this.comments);
          })
    }

    deleteComment(id: number) {
        this.restApi.deleteComment(id).subscribe();
        this.comments = this.comments.filter(e => e.id != id);
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    control(abs: AbstractControl) { return abs as FormControl }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        const req = {...this.registerForm.value, movie_id: this.routeID}

        console.log(JSON.stringify(req as Comment));

        this.restApi.addComment(req as Comment).subscribe((data: {}) => {
            console.log(data);
            this.loadComments(this.routeID!);
          });
        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(req, null, 4));
    }


    getErrorMessage() {

    }
};