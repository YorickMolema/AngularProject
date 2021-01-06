import {SharedService} from '../../shared.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {

  constructor(private service: SharedService, private route: ActivatedRoute) {
    this.popularity = false;
  }

  MovieList: Movie[] = [];
  filterValueMoviesTitle: string | null = '';
  filterValueMoviesYear: string | null = '';
  public popularity: boolean | null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.filterValueMoviesTitle = params.get('title');
      this.filterValueMoviesYear = params.get('year');
      if (!this.filterValueMoviesTitle) {
        this.filterValueMoviesTitle = params.get('name');
        this.refreshMovieListWithActor();
      }
      if (this.filterValueMoviesYear) {
        this.refreshMovieListWithYear();
      } else {
        this.refreshMovieListWithTitle();
      }
    });
  }

  handleFilterClick(event: MouseEvent): void {
    this.refreshMovieListWithActor();
  }

  refreshMovieListWithActor(): void {
    if (this.filterValueMoviesTitle) {
      this.service.getMovieListFilteredByActor(this.filterValueMoviesTitle).subscribe(data => {
        this.MovieList = data;
      });
    }
  }

  public onCheck(value: boolean): void{
    this.popularity = value;
  }

  refreshMovieListWithYear(): void {
    if (this.popularity) {
      if (this.filterValueMoviesYear) {
        this.service.getMovieListFilteredByYear(this.filterValueMoviesYear, true).subscribe(data => {
          this.MovieList = data;
        });
      }
    } else {
      if (this.filterValueMoviesYear) {
        this.service.getMovieListFilteredByYear(this.filterValueMoviesYear, false).subscribe(data => {
          this.MovieList = data;
        });
      }
    }
  }

  refreshMovieListWithTitle(): void {
    if (this.filterValueMoviesTitle) {
      this.service.getMovieListFilteredByTitle(this.filterValueMoviesTitle).subscribe(data => {
        this.MovieList = data;
      });
    }
  }


}
