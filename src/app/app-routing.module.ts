import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GenresComponent } from "./pages/genres/genres.component";
import { HomeComponent } from "./pages/home/home.component";
import { MovieDetailsComponent } from "./pages/movie-details/movie-details.component";
import { MoviesComponent } from "./pages/movies/movies.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { TvShowsComponent } from "./pages/tv-shows/tv-shows.component";
import { TvshowDetailsComponent } from "./pages/tvshow-details/tvshow-details.component";

const routes: Routes = [
       {path:"", component: HomeComponent},
       {path:"movies", component: MoviesComponent},
       {path:"tv-shows", component: TvShowsComponent},
       {path:"genres", component: GenresComponent},
       {path:"movie/:id", component: MovieDetailsComponent},
       {path:"tv-show/:id", component: TvshowDetailsComponent},
       {path:"movies/genres/:id", component: MoviesComponent},
       {path:"tv-shows/genres/:id", component: TvShowsComponent},
       {path:"**", component: NotFoundComponent}
];

@NgModule({
       imports: [RouterModule.forRoot(routes)],
       exports: [RouterModule],
})
export class AppRoutingModule {}
