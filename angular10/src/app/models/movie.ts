export class Movie {
  actors: string;
  countries: string;
  description: string;
  genre: string;
  id: number;
  imdb_url: string;
  img_url: string;
  languages: string;
  metascore: string;
  rating: string;
  runtime: string;
  tagline: string;
  title: string;
  users_rating: string;
  votes: string;
  year: string;
  directors: string;


  constructor(actors: string, countries: string, description: string, genre: string, id: number, imdbUrl: string, imgUrl: string, languages: string, metascore: string, rating: string, runtime: string, tagline: string, title: string, usersRating: string, votes: string, year: string, directors: string) {
    this.actors = actors;
    this.countries = countries;
    this.description = description;
    this.genre = genre;
    this.id = id;
    this.imdb_url = imdbUrl;
    this.img_url = imgUrl;
    this.languages = languages;
    this.metascore = metascore;
    this.rating = rating;
    this.runtime = runtime;
    this.tagline = tagline;
    this.title = title;
    this.users_rating = usersRating;
    this.votes = votes;
    this.year = year;
    this.directors = directors;
  }
}
