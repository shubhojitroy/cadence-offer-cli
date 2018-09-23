import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'co-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  tabTitle = 'Share offer scheduled to open on Xday X Xxx 2018';

  constructor() { }

  ngOnInit() {
  }

}
