import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'co-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  pageTitle = 'Login to lodge the application';
  loginform: FormGroup;
  login: FormControl;
  constructor(private router: Router) { }

  createFormControls() {
    this.login = new FormControl('', Validators.required);
  }

  loginForm() {
    this.loginform = new FormGroup ({
      login: this.login
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.loginForm();
  }
  onSubmit() {
    this.router.navigate(['/application']);
  }

}
