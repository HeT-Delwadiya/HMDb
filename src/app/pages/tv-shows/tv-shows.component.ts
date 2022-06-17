import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Paginator } from "primeng/paginator";
import { take } from "rxjs";
import { TvshowService } from "src/app/services/tvshow.service";

@Component({
       selector: "app-tv-shows",
       templateUrl: "./tv-shows.component.html",
})
export class TvShowsComponent implements OnInit {
       tvshows: any[] = [];
       curPage: number = 1;
       totalRecords: number = 20;
       isSearchedMoviesList: boolean = false;
       curSearchText: string = "";
       genreId: string = "";

       constructor(private tvshowService: TvshowService, private route: ActivatedRoute) {}

       ngOnInit(): void {
              this.route.params.pipe(take(1)).subscribe((params:any) => { 
                     if (params.id) {
                            this.genreId = params.id;
                            this.getTvShowsByGenre(params.id, this.curPage);
                     } else {
                            this.fetchTvShows(this.curPage);
                     }
              });
       }

       getTvShowsByGenre = (genreId: string, page: number) => {
              this.tvshowService
                     .getTvShowsByGenre(genreId, page)
                     .subscribe((res: any) => {
                            this.tvshows = res.results;
                            res.total_pages > 500
                                   ? (this.totalRecords = 10000)
                                   : (this.totalRecords = res.total_results);
                     });
       }

       fetchTvShows = (page: number) => {
              this.tvshowService.getTvShowsByPage(page, "popular").subscribe((res: any) => {
                     this.tvshows = res.results;
                     res.total_pages>500 ? this.totalRecords = 10000 : this.totalRecords = res.total_results;
              })
       }

       fetchTvShowsByName = (name: string, page: number) => {
              this.tvshowService.getTvShowsByName(name, page).subscribe((res: any) => {
                     this.tvshows = res.results;
                     res.total_pages>500 ? this.totalRecords = 10000 : this.totalRecords = res.total_results;
              })
       }

       handlePageChange = (event: any) => {
              this.curPage = event.page+1;
              this.isSearchedMoviesList ? this.fetchTvShowsByName(this.curSearchText, this.curPage) : this.fetchTvShows(this.curPage);
       }

       handleSearch = (name: string) => {
              if(name==="") {
                     this.isSearchedMoviesList = false;
                     this.resetPageToOne();
                     return this.fetchTvShows(this.curPage);
              }
              this.curSearchText = name;
              this.isSearchedMoviesList = true;
              this.resetPageToOne();
              this.fetchTvShowsByName(this.curSearchText, this.curPage)
       }

       @ViewChild('paginator', { static: true }) paginator: Paginator | undefined = undefined;

       resetPageToOne = (): void => {
              this.curPage=1;
              this.paginator!.changePage(this.curPage-1);
       }
}
