import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  submitted: Boolean = false;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off-outline';
  wrongPhnNumberMsg: any;
  wrongPasswordMsg: any;
  isInValidPhn:Boolean = false;
  isInValidPsw:Boolean = false;
  constructor(
    public navCtrl:NavController,
  ) {
    this.loginForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  get f() { return this.loginForm.controls }


  /**
   * Show hide password
   */
  showHide() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }

  /**
   * Login
   */
  login(data) {
    console.log(data)
    const obj = {
      phoneNumber: "1234567899",
      password: 'user@123'
    }
    this.submitted = true;
    if (this.loginForm.invalid) {
      return
    }
    if (obj.phoneNumber != data.phoneNumber || obj.password != data.password) {
      console.log("in if")
      if (obj.phoneNumber != data.phoneNumber) {
        this.wrongPhnNumberMsg = "Phone Number not found";
        this.isInValidPhn = true;
      } else {
        this.wrongPhnNumberMsg = "";
        this.isInValidPhn = false;
      }
      if (obj.password != data.password) {
        this.wrongPasswordMsg = "Incorrect password";
        this.isInValidPsw = true
      } else {
        this.wrongPasswordMsg = "";
        this.isInValidPsw = false;
      }
      return
    } else {
      this.wrongPasswordMsg = "";
      this.wrongPhnNumberMsg = "";
      this.isInValidPsw = false;
      this.isInValidPhn = false;
    }
    console.log(data);
    this.navCtrl.navigateForward('/home/feed');

  }

}
