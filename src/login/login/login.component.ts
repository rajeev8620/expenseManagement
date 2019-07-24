import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from '../services/login.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  private loginObj:any;
  showAlert=0;
  loginErrorMessage:string;
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private logSer:LoginService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }    
    this.loading = true;
    var emailId=this.loginForm.value.email;
    var password=this.loginForm.value.password;
    this.loginObj={Email:emailId,Password:password} ;
    this.logSer.checkLogin(this.loginObj)
            .pipe(first())
            .subscribe(
                data => {
                  this.router.navigateByUrl('/dashboard');
                },
                error => {
                  console.log("The error is ",error);
                });
  }

}
