import {SharedService} from '../../shared.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Actor} from '../../models/actor';

@Component({
  selector: 'app-show-actors',
  templateUrl: './show-actors.component.html',
  styleUrls: ['./show-actors.component.css']
})
export class ShowActorsComponent implements OnInit {

  constructor(private service: SharedService, private route: ActivatedRoute) {
  }

  ActorList: Actor[] = [];

  path: string | null = '';
  filter: string | null = '';
  filterValueID: string | null = '';
  ModalTitle: string | null = '';
  ActivateAddActorComp = false;
  ActorName: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        this.filter = params.get('id');
        this.path = '/actors/';
        this.refreshActorList();
      } else {
        this.filter = params.get('');
        this.path = '/actors';
        this.refreshActorList();
      }
    });
  }

  handleFilterClick(event: MouseEvent): void {
    this.refreshActorList();
  }

  addClick(): void{
    this.ModalTitle = 'Add Actor';
    this.ActivateAddActorComp = true;
  }

  closeClick(): void{
    this.ActivateAddActorComp = false;
    this.refreshActorList();
  }

  refreshActorList(): void {
    if (this.path) {
      if (this.filter) {
        this.service.getActorListFiltered(this.path, this.filter).subscribe(data => {
          this.ActorList = data;
        });
      } else {
        this.service.getActorListFiltered(this.path, '').subscribe(data => {
          this.ActorList = data;
        });
      }
    }
  }

  deleteClicked(dataItem: Actor): void {
    if (confirm('Are you sure you want to delete ' + dataItem.Name + ' from the database?')) {
      this.service.deleteActorByID(dataItem.id).subscribe(data => {
        alert(data.toString());
        this.refreshActorList();
      });
    }
  }
}
