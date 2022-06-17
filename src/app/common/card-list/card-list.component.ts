import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "src/app/models/movie";

@Component({
       selector: "app-card-list",
       templateUrl: "./card-list.component.html",
})
export class CardListComponent implements OnInit {

       @Input() title: string = "Movies";

       @Input() items: Movie[] = [];

       @Input() isTvShow: boolean = false;

       constructor() {}

       ngOnInit(): void {

       }
}
