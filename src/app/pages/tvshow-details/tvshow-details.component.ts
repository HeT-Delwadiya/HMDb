import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TvshowService } from "src/app/services/tvshow.service";

@Component({
       selector: "app-tvshow-details",
       templateUrl: "./tvshow-details.component.html",
})
export class TvshowDetailsComponent implements OnInit {
       tvshow: any = null;
       tvshowVideos: any = null;
       similarTvshow: any[] = [];
       tvshowImages: any = null;
       tvshowCredits: any = null;

       constructor(
              private route: ActivatedRoute,
              private tvshowService: TvshowService
       ) {}

       ngOnInit(): void {
              this.route.params.pipe().subscribe(({ id }) => {
                     this.getTvShow(id);
                     console.log(id);
                     
                     this.getTvShowVideos(id);
                     this.getTvShowImages(id);
                     this.getTvShowCredits(id);
                     this.getTvShowSimilar(id);
              });
       }

       getTvShow = (id: string) => {
              this.tvshowService.getTvShowById(id).subscribe((res: any) => {
                     this.tvshow = res;
              });
       };

       getTvShowVideos(id: string) {
              this.tvshowService
                     .getTvShowVideos(id)
                     .subscribe((res: any) => {
                            this.tvshowVideos = res.results.slice(0,6);
                     });
       }

       getTvShowSimilar(id: string) {
              this.tvshowService
                     .getTvShowSimilar(id)
                     .subscribe((res: any) => {
                            this.similarTvshow = res.results.slice(0,8);
                     });
       }

       getTvShowImages(id: string) {
              this.tvshowService
                     .getTvShowImages(id)
                     .subscribe((res: any) => {
                            this.tvshowImages = res;
                     });
       }

       getTvShowCredits(id: string) {
              this.tvshowService
                     .getTvShowCredits(id)
                     .subscribe((res: any) => {
                            this.tvshowCredits = res;
                     });
       }
}
