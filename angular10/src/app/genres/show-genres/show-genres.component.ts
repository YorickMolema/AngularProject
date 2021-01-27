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


  path: string | null = '';
  filter: string | null = '';
  genreList: Genre[] = [];
  actorID: string | null = '';
  directorID = '';
  urlType: string | null = '';
  public sorted = false;
  public sortDirection = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('actorID')) {
        this.filter = params.get('actorID') ;
        this.path = '/actors/';
        this.refreshGenreList();
      }
      if (params.get('directorID')) {
        this.filter = params.get('directorID') ;
        this.path = '/directors/';
        this.refreshGenreList();
      }
    });
  }

  handleFilterClick(event: MouseEvent): void {
    this.refreshGenreList();
  }

  refreshGenreList(): void {
    if (this.path && this.filter) {
      this.service.getGenres(this.path, this.filter).subscribe(data => {
        this.genreList = data;
      });
    }
  }

  onCheckSortDirection(value: boolean): void {
    this.sortDirection = value;
  }

  onCheckSorted(value: boolean): void {
    this.sorted = value;
  }
}
