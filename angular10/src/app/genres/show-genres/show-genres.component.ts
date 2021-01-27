import { Component, OnInit } from '@angular/core';
import {Genre} from '../../models/genre';
import {SharedService} from '../../shared.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-genres',
  templateUrl: './show-genres.component.html',
  styleUrls: ['./show-genres.component.css']
})
export class ShowGenresComponent implements OnInit {

  constructor(private service: SharedService, private route: ActivatedRoute) { }

  genreList: Genre[] = [];
  actorID = '';
  directorID = '';
  urlType: string | null = '';
  public sorted = false;
  public sortDirection = false;

  ngOnInit(): void {
    this.route.url.subscribe(data => {
      if (data[1]) {
        this.urlType = data[1].path; // check what type of data is being requested
      }
    });
    this.refreshGenreList();
  }

  handleFilterClick(event: MouseEvent): void {
    this.refreshGenreList();
  }

  refreshGenreList(): void {
    if (this.urlType === 'get-by-actor') {
      this.service.getGenresByActor(this.actorID, this.sorted, this.sortDirection).subscribe(data => {
          this.genreList = data;
        });
    } else if (this.urlType === 'get-by-director') {
      this.service.getGenresByDirector(this.directorID, this.sorted, this.sortDirection).subscribe(data => {
          this.genreList = data;
        });
    } else {
      this.genreList = [];
    }
  }

  onCheckSortDirection(value: boolean): void {
    this.sortDirection = value;
  }

  onCheckSorted(value: boolean): void {
    this.sorted = value;
  }
}
