import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../helpers/must-match.validator';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { formatDate } from '@angular/common';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  regSuccess=0;
  regExist=0;
  today= new Date();
  jstoday = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private regSer:RegistrationService
    
  ) { 
    this.jstoday = formatDate(this.today, 'yyyy-MM-dd hh:mm:ss a', 'en-US', '+0530');
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    var firstName=this.registerForm.value.firstName;
    var lastName=this.registerForm.value.lastName;
    var emailId=this.registerForm.value.email;
    var password=this.registerForm.value.password;
    const regObj={
      FirstName:firstName,LastName:lastName,Email:emailId,Password:password,UserType:1,Status:1
    }
     this.regSer.addRegistration(regObj)
     .pipe(first())
     .subscribe(
         data => {
           this.router.navigateByUrl('/login');
         },
         error => {
           console.log("The error is ",error);
         });
  }

}
