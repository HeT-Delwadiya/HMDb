import { Component, Input, OnInit } from "@angular/core";


@Component({
       selector: "app-item-gallery",
       templateUrl: "./item-gallery.component.html",
})
export class ItemGalleryComponent implements OnInit {

       @Input() itemGallery: any = null;

       constructor() {}

       ngOnInit(): void {}
}
