import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
       selector: "app-embeded-video",
       templateUrl: "./embeded-video.component.html",
})
export class EmbededVideoComponent implements OnInit {
       @Input() key: string | undefined = undefined;
       @Input() site: string = "YouTube";

       videoUrl: SafeResourceUrl = "";

       constructor(private sanitizer: DomSanitizer) {}

       ngOnInit(): void {
              switch (this.site) {
                     case "YouTube":
                            this.videoUrl = this.getSafeUrl(
                                   "https://www.youtube.com/embed/" + this.key
                            );
                            break;
                     case "Vimeo":
                            this.videoUrl = this.getSafeUrl(
                                   "https://www.vimeo.com/embed/" + this.key
                            );
                            break;
              }
       }

       getSafeUrl(url: string) {
              return this.sanitizer.bypassSecurityTrustResourceUrl(url);
       }
}
