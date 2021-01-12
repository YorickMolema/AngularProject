import { Component, OnInit } from '@angular/core';
import {Genre} from '../../models/genre';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-show-genres',
  templateUrl: './show-genres.component.html',
  styleUrls: ['./show-genres.component.css']
})
export class ShowGenresComponent implements OnInit {

  constructor(private service: SharedService) { }

  genreList: Genre[] = [];
  actorID: string | null = '';
  directorID: string | null = '';

  ngOnInit(): void {
    this.refreshGenreList();
  }

  handleFilterClick(event: MouseEvent): void {
    this.refreshGenreList();
  }

  refreshGenreList(): void {
    if (this.actorID != null) {
      this.service.getGenresByActor(this.actorID).subscribe(data => {
          this.genreList = data;
        });
    } else if (this.directorID != null) {
      this.service.getGenresByDirector(this.directorID).subscribe(data => {
          this.genreList = data;
        });
    } else {
      this.genreList = [];
    }
  }

}
