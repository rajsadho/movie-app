import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter, switchMap, map, tap } from "rxjs/operators";


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
        this.router.navigate(["employees", id]);
        }
};