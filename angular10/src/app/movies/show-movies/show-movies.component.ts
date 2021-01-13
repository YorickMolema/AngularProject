import {SharedService} from '../../shared.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {

  constructor(private service: SharedService, private route: ActivatedRoute) {
  }

  MovieList: Movie[] = [];

  path: string | null = '';
  filter: string | null = '';
  filterValueMoviesYear: string | null = '';
  filterValueMoviesTitle: string | null = '';
  filterValueMoviesActor: string | null = '';
  filterValueMoviesDirector: string | null = '';
  filterValueMoviesImdbURL: string | null = '';
  ActivateAddMovie = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('title')) {
        this.filter = params.get('title');
        this.path = '/movies/find-by-title/';
        this.refreshMovieList();
      }
      if (params.get('year')) {
        this.filter = params.get('year') + '?popularity=true';
        this.path = '/movies/get-by-year/';
        this.refreshMovieList();
      }
      if (params.get('director')) {
        this.filter = params.get('director');
        this.path = '/movies/get-by-director/';
        this.refreshMovieList();
      }
      if (params.get('actor')) {
        this.filter = params.get('actor');
        this.path = '/actors/find-movie-by-actor/';
        this.refreshMovieList();
      }
      if (params.get('ImdbURL')) {
        this.filter = params.get('ImdbURL');
        this.path = '/movies/';
        this.refreshMovieList();
      }
    });
  }

  handleFilterClick(event: MouseEvent): void {
    this.refreshMovieList();
  }

  refreshMovieList(): void {
    if (this.path && this.filter) {
      this.service.getMovieList(this.path, this.filter).subscribe(data => {
        this.MovieList = data;
      });
    }
  }

  closeClick(): void {
    this.ActivateAddMovie = false;
    this.refreshMovieList();
  }

  addClick(): void {
    this.ActivateAddMovie = true;
  }

  deleteClick(url: string): void {
    if (confirm('Are you sure?')) {
      this.service.deleteMovie(url).subscribe(data => {
        alert(data.toString());
        this.refreshMovieList();
      });
    }
  }

}
