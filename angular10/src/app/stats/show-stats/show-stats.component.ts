import {SharedService} from '../../shared.service';
import {Component, OnInit} from '@angular/core';
import {Stats} from '../../models/stats';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-show-stats',
  templateUrl: './show-stats.component.html',
  styleUrls: ['show-stats.component.css']
})
export class ShowStatsComponent implements OnInit {

  constructor(private service: SharedService, private route: ActivatedRoute, ) {
  }

  path: string | null = '';
  filter: string | null = '';
  filterValue: string | null = '';
  filterYear: string | null = '';
  StatsList: Stats[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('actorName')) {
        this.path = '/movies/stats/';
        this.filter = params.get('actorName');
        this.refreshStats();
      }
      if (params.get('year')) {
        this.path = '/movies/stats/';
        this.filter = params.get('actorName') + '?year=' + params.get('year');
        this.refreshStats();
      }
    });
  }

  refreshStats(): void {
    if (this.path && this.filter) {
      this.service.getMovieStats(this.path, this.filter).subscribe(data => {
        this.StatsList = data;
      });
    }
  }

}
