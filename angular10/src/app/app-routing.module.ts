import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ActorsComponent} from './actors/actors.component';
import {MoviesComponent} from './movies/movies.component';

const routes: Routes = [
  {path: 'actors', component: ActorsComponent },
  {path: 'actors/:id', component: ActorsComponent },
  {path: 'movies', component: MoviesComponent },
  {path: 'movies/find-by-title/:title', component: MoviesComponent },
  {path: 'movies/get-by-year/:year', component: MoviesComponent },
  {path: 'actors/find-movie-by-actor/:name', component: MoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
