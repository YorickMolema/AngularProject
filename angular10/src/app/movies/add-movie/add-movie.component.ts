import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private service: SharedService) { }

  MovieTitle: string| Blob = '';
  MovieRating: string | Blob = '';
  MovieYear: string | Blob = '';
  MovieUserRating: string | Blob = '';
  MovieVotes: string | Blob = '';
  MovieMetaScore: string | Blob = '';
  MovieImgUrl: string | Blob = '';
  MovieCountries: string | Blob = '';
  MovieLanguages: string | Blob = '';
  MovieActors: string | Blob = '';
  MovieGenre: string | Blob = '';
  MovieTagline: string | Blob = '';
  MovieDescription: string | Blob = '';
  MovieDirectors: string | Blob = '';
  MovieRuntime: string | Blob = '';
  MovieImdbUrl: string | Blob = '';

  ngOnInit(): void {
  }

  addMovie(): void {
    if (confirm('Are you sure?')) {
      const formdata = new FormData();
      formdata.append('title', this.MovieTitle);
      formdata.append('rating', this.MovieRating);
      formdata.append('year', this.MovieYear + '.0');
      formdata.append('users_rating', this.MovieUserRating);
      formdata.append('votes', this.MovieVotes);
      formdata.append('metascore', this.MovieMetaScore);
      formdata.append('img_url', this.MovieImgUrl);
      formdata.append('countries', this.MovieCountries);
      formdata.append('languages', this.MovieLanguages);
      formdata.append('actors', this.MovieActors);
      formdata.append('genre', this.MovieGenre);
      formdata.append('tagline', this.MovieTagline);
      formdata.append('description', this.MovieDescription);
      formdata.append('directors', this.MovieDirectors);
      formdata.append('runtime', this.MovieRuntime);
      formdata.append('imdb_url', this.MovieImdbUrl);

      this.service.addMovie(formdata).subscribe(res => {
        alert(res.toString());
      });
    }
  }
}
