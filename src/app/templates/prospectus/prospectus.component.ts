import { Component, OnInit } from '@angular/core';

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

}
