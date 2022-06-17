import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Movie } from "src/app/models/movie";
import { MoviesService } from "src/app/services/movies.service";

@Component({
       selector: "app-movie-details",
       templateUrl: "./movie-details.component.html",
})
export class MovieDetailsComponent implements OnInit {
       movie: Movie | null = null;
       movieVideos: any = null;
       similarMovies: Movie[] = [];
       movieImages: any = null;
       movieCredits: any = null;

       constructor(
              private route: ActivatedRoute,
              private movieService: MoviesService
       ) {}

       ngOnInit(): void {
              this.route.params.pipe().subscribe(({ id }) => {
                     this.getMovie(id);
                     this.getMovieVideos(id);
                     this.getMovieImages(id);
                     this.getMovieCredits(id);
                     this.getMovieSimilar(id);
              });
       }

       getMovie = (id: string) => {
              this.movieService.getMovieById(id).subscribe((res: any) => {
                     this.movie = res;
              });
       };

       getMovieVideos(id: string) {
              this.movieService
                     .getMovieVideos(id)
                     .subscribe((res: any) => {
                            this.movieVideos = res.results.slice(0,6);
                     });
       }

       getMovieSimilar(id: string) {
              this.movieService
                     .getMovieSimilar(id)
                     .subscribe((res: any) => {
                            this.similarMovies = res.results.slice(0,8);
                     });
       }

       getMovieImages(id: string) {
              this.movieService
                     .getMovieImages(id)
                     .subscribe((res) => {
                            this.movieImages = res;
                     });
       }

       getMovieCredits(id: string) {
              this.movieService
                     .getMovieCredits(id)
                     .subscribe((res) => {
                            this.movieCredits = res;
                     });
       }
}
