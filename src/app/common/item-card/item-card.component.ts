import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "src/app/models/movie";

@Component({
       selector: "app-item-card",
       templateUrl: "./item-card.component.html",
})
export class ItemCardComponent implements OnInit {

       @Input() itemData: Movie | undefined = undefined;
       @Input() isTvShow: boolean = false;

       constructor() {}

       ngOnInit(): void {}

       isImageAvailable = () => {
              return this.itemData?.backdrop_path ? `https://image.tmdb.org/t/p/original${this.itemData.poster_path}` : "https://almetjer.com/wp-content/themes/ciyashop/images/loader.gif";
       }
}
