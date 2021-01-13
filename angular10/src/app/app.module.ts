import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorsComponent } from './actors/actors.component';
import { SharedService } from './shared.service';
import {RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowActorsComponent } from './actors/show-actors/show-actors.component';
import {ShowMoviesComponent} from './movies/show-movies/show-movies.component';
import {MoviesComponent} from './movies/movies.component';
import { GenresComponent } from './genres/genres.component';
import { ShowGenresComponent } from './genres/show-genres/show-genres.component';
import {StatsComponent} from './stats/stats.component';
import {ShowStatsComponent} from './stats/show-stats/show-stats.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import {AddActorsComponent} from './actors/add-actors/add-actors.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    ShowActorsComponent,
    MoviesComponent,
    ShowMoviesComponent,
    GenresComponent,
    ShowGenresComponent,
    ShowStatsComponent,
    StatsComponent,
    AddMovieComponent,
    AddActorsComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
