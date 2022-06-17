import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HttpClientModule } from "@angular/common/http";
import { SliderComponent } from './common/slider/slider.component';
import { CardListComponent } from './common/card-list/card-list.component';
import { ItemCardComponent } from './common/item-card/item-card.component';
import {PaginatorModule} from 'primeng/paginator';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { GenresComponent } from './pages/genres/genres.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TabViewModule } from 'primeng/tabview';
import { ItemOverviewComponent } from './common/item-overview/item-overview.component';
import { EmbededVideoComponent } from './common/embeded-video/embeded-video.component';
import { ItemGalleryComponent } from './common/item-gallery/item-gallery.component';
import {ImageModule} from 'primeng/image';
import { ItemCastComponent } from './common/item-cast/item-cast.component';
import {CarouselModule} from 'primeng/carousel';
import { TvshowDetailsComponent } from './pages/tvshow-details/tvshow-details.component';

@NgModule({
       declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, MoviesComponent, SliderComponent, CardListComponent, ItemCardComponent, MovieDetailsComponent, TvShowsComponent, GenresComponent, NotFoundComponent, ItemOverviewComponent, EmbededVideoComponent, ItemGalleryComponent, ItemCastComponent, TvshowDetailsComponent],
       imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, PaginatorModule, TabViewModule, ImageModule, CarouselModule],
       providers: [],
       bootstrap: [AppComponent],
})
export class AppModule {}
