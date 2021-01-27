import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Actor} from './models/actor';
import {Movie} from './models/movie';
import {Genre} from './models/genre';

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

  getGenresByActor(actorID: string, sorted: boolean, sortDirection: boolean): Observable<Genre[]>{
    // tslint:disable-next-line:max-line-length
    return this.http.get<Genre[]>(this.APIUrl + '/actors/' + actorID + '/genres?sorted=' + String(sorted) + '&sortDirection=' + String(sortDirection));
  }

  getGenresByDirector(directorID: string, sorted: boolean, sortDirection: boolean): Observable<Genre[]>{
    // tslint:disable-next-line:max-line-length
    return this.http.get<Genre[]>(this.APIUrl + '/directors/' + directorID + '/genres?sorted=' + String(sorted) + '&sortDirection=' + String(sortDirection));
  }

  deleteActorByID(actorID: string): void {
    this.http.delete(this.APIUrl + '/' + actorID);
  }

  getActorList(): Observable<Actor[]>{
    return this.http.get<Actor[]>(this.APIUrl + '/actors');
  }

}
