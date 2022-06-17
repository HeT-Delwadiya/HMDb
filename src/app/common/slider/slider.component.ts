import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "src/app/models/movie";
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
       selector: "app-slider",
       templateUrl: "./slider.component.html",
       animations: [trigger('slideFade', [state('void', style({ opacity: 0 })), transition('void <=> *', [animate('1s')])])]
})
export class SliderComponent implements OnInit {

       @Input() 
       items: any[] = []

       @Input()
       isBanner: boolean = false;

       @Input()
       isTvShow: boolean = false;

       currentSlideIndex: number = 0;

       constructor() {}

       ngOnInit(): void {
              if(!this.isBanner) {
                     setInterval(() => {
                            if(this.currentSlideIndex===this.items.length)
                                   this.currentSlideIndex=0;
                            else 
                                   this.currentSlideIndex++;
                     }, 5000);
              } 
       }
}
