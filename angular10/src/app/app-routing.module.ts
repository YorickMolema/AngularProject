import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ActorsComponent} from './actors/actors.component';
import {MoviesComponent} from './movies/movies.component';
import {GenresComponent} from './genres/genres.component';
import {StatsComponent} from './stats/stats.component';

const routes: Routes = [
  {path: 'actors', component: ActorsComponent },
  {path: 'actors/:id', component: ActorsComponent },
  {path: 'movies', component: MoviesComponent },
  {path: 'movies/find-by-title/:title', component: MoviesComponent },
  {path: 'movies/get-by-year/:year', component: MoviesComponent },
  {path: 'genres', component: GenresComponent },
  {path: 'genres/get-by-actor/:actorID', component: GenresComponent },
  {path: 'genres/get-by-director/:directorID', component: GenresComponent },
  {path: 'movies/get-by-director/:director', component: MoviesComponent },
  {path: 'actors/find-movie-by-actor/:actor', component: MoviesComponent },
  {path: 'movies/:ImdbURL', component: MoviesComponent },
  {path: 'movies/:popularity', component: MoviesComponent },
  {path: 'stats/:actorName', component: StatsComponent},
  {path: 'stats/:actorName/:year', component: StatsComponent},
  {path: 'stats', component: StatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
