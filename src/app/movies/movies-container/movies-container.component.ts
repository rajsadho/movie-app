import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
    selector: 'movies-container',
    templateUrl: './movies-container.component.html',
    styleUrls: ['./movies-container.component.scss']
})
export class MoviesContainerComponent {
    // showSideNav$: Observable<boolean>;

    constructor(private route: ActivatedRoute, 
                private router: Router) { }

    onRowClick(id: any) {
        console.log(id);

        this.router.navigate(["movies", id]);
        }
};