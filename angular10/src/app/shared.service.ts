import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Actor} from './models/actor';
import {Movie} from './models/movie';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getActorListFiltered(filter: string): Observable<Actor[]>{
    return this.http.get<Actor[]>(this.APIUrl + '/actors/' + filter);
  }

  getMovieListFilteredByActor(filter: string): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.APIUrl + '/actors/find-movie-by-actor/' + filter);
  }

  getMovieListFilteredByYear(filter: string, popularity: boolean): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.APIUrl + '/movies/get-by-year/' + filter + '?popularity=' + String(popularity));
  }

  getMovieListFilteredByTitle(filter: string): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.APIUrl + '/movies/find-by-title/' + filter);
  }



  getActorList(): Observable<Actor[]>{
    return this.http.get<Actor[]>(this.APIUrl + '/actors');
  }

}
