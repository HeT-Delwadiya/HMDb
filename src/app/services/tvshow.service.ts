import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
       providedIn: "root",
})
export class TvshowService {
       apiKey: string = "0c89d38a41a3d37688e65766cf0ab3ce";

       constructor(private http: HttpClient) {}

       getTvShows = (type: string = "upcoming") => {
              return this.http.get(
                     `https://api.themoviedb.org/3/tv/${type}?api_key=${this.apiKey}`
              );
       };

       getTvShowsByPage = (page: number, type: string = "upcoming") => {
              return this.http.get(
                     `https://api.themoviedb.org/3/tv/${type}?page=${page}&api_key=${this.apiKey}`
              );
       };

       getTrendingTvShows = () => {
              return this.http.get(
                     `https://api.themoviedb.org/3/trending/tv/week?api_key=${this.apiKey}`
              );
       };

       getTvShowsByName = (name: string, page: number) => {
              return this.http.get(
                     `https://api.themoviedb.org/3/search/tv?query=${name}&page=${page}&api_key=${this.apiKey}`
              );
       };

       getTvShowById = (id: string) => {
              return this.http.get(
                     `https://api.themoviedb.org/3/tv/${id}?api_key=${this.apiKey}`
              );
       };

       getTvShowVideos = (id: string) => {
              return this.http.get(
                     `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${this.apiKey}`
              );
       };

       getTvShowsGenres() {
              return this.http.get(
                     `https://api.themoviedb.org/3/genre/tv/list?api_key=${this.apiKey}`
              );
       }

       getTvShowsByGenre(genreId: string, pageNumber: number) {
              return this.http.get(
                     `https://api.themoviedb.org/3/discover/tv?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`
              );
       }

       getTvShowImages(id: string) {
              return this.http.get(
                     `https://api.themoviedb.org/3/tv/${id}/images?api_key=${this.apiKey}`
              );
       }

       getTvShowCredits(id: string) {
              return this.http.get(
                     `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${this.apiKey}`
              );
       }

       getTvShowSimilar(id: string) {
              return this.http.get(
                     `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${this.apiKey}`
              );
       }
}
