import { Component, OnInit } from "@angular/core";
import { Genre } from "src/app/models/movie";
import { MoviesService } from "src/app/services/movies.service";
import { TvshowService } from "src/app/services/tvshow.service";

@Component({
       selector: "app-genres",
       templateUrl: "./genres.component.html",
})
export class GenresComponent implements OnInit {
       movieGenres: any = [];
       tvShowGenres: any = [];

       constructor(private moviesService: MoviesService, private tvshowService: TvshowService) {}

       ngOnInit(): void {
              this.moviesService.getMoviesGenres().subscribe((res: any) => {
                     this.movieGenres = res.genres;
              });
              this.tvshowService.getTvShowsGenres().subscribe((res: any) => {
                     this.tvShowGenres = res.genres;
              });
       }
}
