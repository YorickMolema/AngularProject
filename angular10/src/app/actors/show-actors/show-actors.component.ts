import {SharedService} from '../../shared.service';
import {Actor} from '../../models/actor';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-actors',
  templateUrl: './show-actors.component.html',
  styleUrls: ['./show-actors.component.css']
})
export class ShowActorsComponent implements OnInit {

  constructor(private service: SharedService, private route: ActivatedRoute,) {
  }

  ActorList: Actor[] = [];
  filterValue: string | null = '';
  filterValueID: string | null = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.filterValueID = params.get('id');
      this.refreshActorList();
    });
  }

  handleFilterClick(event: MouseEvent): void {
    this.refreshActorList();
  }

  refreshActorList(): void {
    if (this.filterValueID != null) {
      this.service.getActorListFiltered(this.filterValueID).subscribe(data => {
        this.ActorList = data;
      });
    } else {
      this.service.getActorList().subscribe(data => {
        this.ActorList = data;
      });
    }
  }


}
