import { Component, OnInit } from "@angular/core";
import { MoviesDto } from "src/app/models/movie";
import { MoviesService } from "src/app/services/movies.service";
import { TvshowService } from "src/app/services/tvshow.service";

@Component({
       selector: "app-home",
       templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
       upcomingMovies: any = [];
       popularMovies: any = [];
       trendingMovies: any = [];
       topRatedMovies: any = [];
       trendingTvShows: any = [];
       popularTvShows: any = [];

       constructor(private moviesService: MoviesService, private tvshowService: TvshowService) {}

       ngOnInit(): void {
              this.moviesService.getMovies().subscribe((res: any) => {
                     this.upcomingMovies = res.results;
              })
              this.moviesService.getMovies("popular").subscribe((res: any) => {
                     this.popularMovies = res.results.slice(0,8);
              })
              this.moviesService.getTrendingMovies().subscribe((res: any) => {
                     this.trendingMovies = res.results.slice(0,8);
              })
              this.moviesService.getMovies("top_rated").subscribe((res: any) => {
                     this.topRatedMovies = res.results.slice(0,8);
              })

              this.tvshowService.getTvShows("popular").subscribe((res: any) => {
                     this.popularTvShows = res.results.slice(0,8);
              })
              this.tvshowService.getTrendingTvShows().subscribe((res: any) => {
                     this.trendingTvShows = res.results.slice(0,8);
              })
       }
}
