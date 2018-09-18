import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'co-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageTitle = 'Cadence Offer IPO';
  cardLabel = 'Country of Primary Residence';

  countryform: FormGroup;
  country: FormControl;
  countries = [
    'Australia',
    'New Zealand',
    'Singapore',
    'Malaysia',
    'China'
  ];

  constructor(private router: Router) { }

  createFormControls() {
    this.country = new FormControl('', Validators.required);
  }

  createForm() {
    this.countryform = new FormGroup ({
      country: this.country
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    if (this.countryform.valid) {
      if (this.country.value === 'Australia') {
        console.log('Form Submitted!', this.countryform.value);
        this.router.navigate(['/prospectus']);
        this.countryform.reset();
      } else if (this.country.value === 'New Zealand') {
        this.router.navigate(['/prospectus']);
      } else {
        this.router.navigate(['/eligibility-notice']);
      }
    }
  }
}
