import { Component, Input, OnInit } from "@angular/core";

@Component({
       selector: "app-item-cast",
       templateUrl: "./item-cast.component.html",
})
export class ItemCastComponent implements OnInit {

       @Input() cast: any = null;

       constructor() {}

       ngOnInit(): void {}

       getImagePath = (path: string) => {
              return path!==null ? 'https://image.tmdb.org/t/p/original' + path : "https://almetjer.com/wp-content/themes/ciyashop/images/loader.gif";
       }
}
