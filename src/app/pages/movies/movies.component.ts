import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Paginator } from "primeng/paginator";
import { take } from "rxjs";
import { Movie } from "src/app/models/movie";
import { MoviesService } from "src/app/services/movies.service";

@Component({
       selector: "app-movies",
       templateUrl: "./movies.component.html",
})
export class MoviesComponent implements OnInit {
       movies: Movie[] = [];
       curPage: number = 1;
       totalRecords: number = 20;
       isSearchedMoviesList: boolean = false;
       curSearchText: string = "";
       genreId: string = "";

       constructor(private movieService: MoviesService, private route: ActivatedRoute) {}

       ngOnInit(): void {
              this.route.params.pipe(take(1)).subscribe((params:any) => { 
                     if (params.id) {
                            this.genreId = params.id;
                            this.getMoviesByGenre(params.id, this.curPage);
                     } else {
                            this.fetchMovies(this.curPage);
                     }
              });
       }

       getMoviesByGenre = (genreId: string, page: number) => {
              this.movieService
                     .getMoviesByGenre(genreId, page)
                     .subscribe((res: any) => {
                            this.movies = res.results;
                            res.total_pages > 500
                                   ? (this.totalRecords = 10000)
                                   : (this.totalRecords = res.total_results);
                     });
       }

       fetchMovies = (page: number) => {
              this.movieService
                     .getMoviesByPage(page, "popular")
                     .subscribe((res: any) => {
                            this.movies = res.results;
                            res.total_pages > 500
                                   ? (this.totalRecords = 10000)
                                   : (this.totalRecords = res.total_results);
                     });
       };

       fetchMoviesByName = (name: string, page: number) => {
              this.movieService
                     .getMoviesByName(name, page)
                     .subscribe((res: any) => {
                            this.movies = res.results;
                            res.total_pages > 500
                                   ? (this.totalRecords = 10000)
                                   : (this.totalRecords = res.total_results);
                     });
       };

       handlePageChange = (event: any) => {
              this.curPage = event.page + 1;
              this.isSearchedMoviesList
                     ? this.fetchMoviesByName(this.curSearchText, this.curPage)
                     : this.fetchMovies(this.curPage);
       };

       handleSearch = (name: string) => {
              if (name === "") {
                     this.isSearchedMoviesList = false;
                     this.resetPageToOne();
                     return this.fetchMovies(this.curPage);
              }
              this.curSearchText = name;
              this.isSearchedMoviesList = true;
              this.resetPageToOne();
              this.fetchMoviesByName(this.curSearchText, this.curPage);
       };

       @ViewChild("paginator", { static: true }) paginator:
              | Paginator
              | undefined = undefined;

       resetPageToOne = (): void => {
              this.curPage = 1;
              this.paginator!.changePage(this.curPage - 1);
       };
}
