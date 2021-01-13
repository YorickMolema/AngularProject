import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Actor} from './models/actor';
import {Movie} from './models/movie';
import {Genre} from './models/genre';
import {Stats} from './models/stats';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getActorListFiltered(path: string, filter: string): Observable<Actor[]>{
    return this.http.get<Actor[]>(this.APIUrl + path + filter);
  }

  deleteActorByID(actorID: string): Observable<Actor[]> {
    return this.http.delete<Actor[]>(this.APIUrl + '/actors/' + actorID);
  }

  getMovieList(path: string, filter: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.APIUrl + path + filter);
  }

  deleteMovie(filter: string): Observable<Movie[]> {
    return this.http.delete<Movie[]>(this.APIUrl + '/movies/' + filter);
  }

  getGenres(path: string, filter: string): Observable<Genre[]>{
    return this.http.get<Genre[]>(this.APIUrl + path + filter + '/genres');
  }

  addMovie(val: any): Observable<any>{
    return this.http.post(this.APIUrl + '/movies  ', val);
  }

  getMovieStats(path: string, filter: string): Observable<Stats[]> {
    return this.http.get<Stats[]>(this.APIUrl + path + filter);
  }

  addActor(val: any): Observable<any>{
    return this.http.post(this.APIUrl + '/actors', val);
  }
}
