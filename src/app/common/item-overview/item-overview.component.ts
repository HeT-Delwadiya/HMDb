import { Component, Input, OnInit } from "@angular/core";
import { Genre, Movie } from "src/app/models/movie";

@Component({
       selector: "app-item-overview",
       templateUrl: "./item-overview.component.html",
})
export class ItemOverviewComponent implements OnInit {

       @Input() movie: any= undefined;
       @Input() isTvShow: boolean = false;

       constructor() {}

       ngOnInit(): void {}

       getGenres = () => {
              let genres: any = [];
              this.movie.genres.map((gen: Genre) => genres.push(gen.name))
              return genres.join(", ")
       }
}
