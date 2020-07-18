import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  passwordForm: FormGroup;
  submitted: Boolean = false;
  match = true;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off-outline';
  cPasswordType: string = 'password';
  cPasswordIcon: string = 'eye-off-outline';
  details:any;
  constructor(
    public navCrl:NavController,
    public route:Router
  ) {
    this.passwordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      cPassword: new FormControl('', [Validators.required])
    })

    if(this.route.getCurrentNavigation().extras.state){
      this.details = this.route.getCurrentNavigation().extras.state.data
    }
    console.log("in password page",this.details)
  }

  ngOnInit() {
  }

  // Create Validation
  get f() { return this.passwordForm.controls }

  /**
   * Compare password
   * @param form
   */
  comparePassword(form) {
    const message = document.getElementById('message');
    if (form.value.password === form.value.cPassword) {
      this.match = true;
      // message.innerHTML = "Password matched!"
    } else {

    }
  }


  /**
  * Show hide password
  */
  showHide() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }

  /**
   * Show hide password
   */
  cShowHide() {
    this.cPasswordType = this.cPasswordType === 'text' ? 'password' : 'text';
    this.cPasswordIcon = this.cPasswordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }

  /**
   * Next screen
   */
  next(data) {
    const message = document.getElementById('message');
    console.log("-------------------------")
    this.submitted = true;
    if (this.passwordForm.invalid) {
      return
    }
    if (data.password != data.cPassword) {
      this.match = false;
      message.innerHTML = "Passwords must match.";
      return
    }else{
      this.match = true;
      message.innerHTML = "";
    }
    console.log("data", data);
    if(this.details == 'sign-up'){

      this.navCrl.navigateForward('/registration/profile')
    }else{
      this.navCrl.navigateForward('/registration/reset-successfull')
    }
  }

  styleObject(){
    if(this.submitted && this.passwordForm.controls.cPassword.invalid){
      return {'border-bottom':'3px solid var(--error-color)'}
    }
    if(!this.match){
      return {'border-bottom':'3px solid var(--error-color)'}

    }
  }
}
