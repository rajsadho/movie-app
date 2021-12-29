import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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

    @ViewChild('formDirective') private formDirective: NgForm | undefined;

    submitted = false;
    commentForm = this.formBuilder.group({
        username: ['', Validators.required],
        text: ['', Validators.required]
    });

    comments: Comment[] = [];
    movie: Movie | undefined;
    routeID: number | undefined;
    newComment: Object = {};

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.routeID = params['id'];
            this.loadMovie(params['id']);
            this.loadComments(params['id']);
        });  
        // this.resetForm();  
    }

    loadMovie(id: number) {
        return this.restApi.getMovie(id).subscribe((data: {}) => {
          this.movie = data as Movie;
        })
    }

    loadComments(id: number) {
        return this.restApi.getCommentsByMovie(id).subscribe((data: {}) => {
            this.comments = data as Comment[];
          })
    }

    deleteComment(id: number) {
        this.restApi.deleteComment(id).subscribe();
        this.comments = this.comments.filter(e => e.id != id);
    }

    // getter for form fields
    get f() { return this.commentForm.controls; }

    control(abs: AbstractControl) { return abs as FormControl }

    onSubmit() {
        if (this.commentForm.invalid) {
            return;
        }

        const req = {...this.commentForm.value, movie_id: this.routeID}

        this.resetForm();

        this.restApi.addComment(req as Comment).subscribe((data: {}) => {
            console.log(data);
            this.loadComments(this.routeID!);
          });
    }

    resetForm() {
        this.commentForm.reset();
        this.formDirective?.resetForm();
    }
};