import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
       providedIn: "root",
})
export class MoviesService {
       apiKey: string = "0c89d38a41a3d37688e65766cf0ab3ce";

       constructor(private http: HttpClient) {}

       getMovies = (type: string = "upcoming") => {
              return this.http.get(
                     `https://api.themoviedb.org/3/movie/${type}?api_key=${this.apiKey}`
              );
       };

       getMoviesByPage = (page: number, type: string = "upcoming") => {
              return this.http.get(
                     `https://api.themoviedb.org/3/movie/${type}?page=${page}&api_key=${this.apiKey}`
              );
       };

       getTrendingMovies = () => {
              return this.http.get(
                     `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.apiKey}`
              );
       };

       getMoviesByName = (name: string, page: number) => {
              return this.http.get(
                     `https://api.themoviedb.org/3/search/movie?query=${name}&page=${page}&api_key=${this.apiKey}`
              );
       };

       getMovieById = (id: string) => {
              return this.http.get(
                     `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`
              );
       };

       getMovieVideos = (id: string) => {
              return this.http.get(
                     `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.apiKey}`
              );
       };

       getMoviesGenres() {
              return this.http.get(
                     `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}`
              );
       }

       getMoviesByGenre(genreId: string, pageNumber: number) {
              return this.http.get(
                     `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`
              );
       }

       getMovieImages(id: string) {
              return this.http.get(
                     `https://api.themoviedb.org/3/movie/${id}/images?api_key=${this.apiKey}`
              );
       }

       getMovieCredits(id: string) {
              return this.http.get(
                     `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.apiKey}`
              );
       }

       getMovieSimilar(id: string) {
              return this.http.get(
                     `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${this.apiKey}`
              );
       }
}
