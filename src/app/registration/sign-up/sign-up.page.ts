import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  signUpForm: FormGroup;
  submitted: Boolean = false;
  error:any;
  constructor(
    public navCrl:NavController
  ) {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  // Create Validation
  get f() { return this.signUpForm.controls }


  next(data) {
    console.log("-------------------------")
    this.submitted = true;
    if (this.signUpForm.invalid) {
      this.error = '1px solid red';
      return
    }
    console.log("data", data);
    this.navCrl.navigateForward('/shared/verify-code')
  }
}
