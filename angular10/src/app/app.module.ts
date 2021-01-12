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


@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    ShowActorsComponent,
    MoviesComponent,
    ShowMoviesComponent,
    GenresComponent,
    ShowGenresComponent,
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
