import {SharedService} from '../../shared.service';
import {Actor} from '../../models/actor';
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-actors',
  templateUrl: './add-actors.component.html',
  styleUrls: ['./add-actors.component.css']
})
export class AddActorsComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() AName: any;
  ActorName: string | Blob = '';

  ngOnInit(): void {
  }

  addActor(): void{
    if (confirm('Are you sure?')) {
      const formdata = new FormData();
      formdata.append('name', this.ActorName);
      this.service.addActor(formdata).subscribe(res => {
        alert(res.toString());
      });
    }
  }


}
