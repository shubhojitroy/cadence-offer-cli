import { Component, OnInit } from '@angular/core';
import { ScheduleComponent } from '../../tabs/schedule/schedule.component';
import { DatesComponent } from '../../tabs/dates/dates.component';
import { DetailsComponent } from '../../tabs/details/details.component';

@Component({
  selector: 'co-prospectus',
  templateUrl: './prospectus.component.html',
  styleUrls: ['./prospectus.component.scss']
})
export class ProspectusComponent implements OnInit {

  cardLabel = 'Cadence Capital Investment Philosophy';
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {

  }
}
