import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'co-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  cardLabel = 'Application';
  constructor() { }

  ngOnInit() {
  }

}
