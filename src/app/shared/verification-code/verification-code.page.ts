import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
declare const $: any;
@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.page.html',
  styleUrls: ['./verification-code.page.scss'],
})
export class VerificationCodePage implements OnInit {
  code: any;
  verificationCode = 4568;
  message: any;
  details:any;
  constructor(
    public navCtl: NavController,
    public route: Router
  ) {
    if(this.route.getCurrentNavigation().extras.state){
      this.details = this.route.getCurrentNavigation().extras.state.data
    }
    console.log(this.details)
  }

  ngOnInit() {
  }


  otpController(event, next, prev) {
    if (event.target.value.length < 1 && prev) {
      prev.setFocus()
    }
    else if (next && event.target.value.length > 0) {
      next.setFocus();
    }
    else {
      return 0;
    }
  }


  /**
   * Verify code
   */
  next() {
    console.log("code ", $("#first").val(), $("#second").val(), $("#third").val(), $("#fourth").val());
    this.code = $("#first").val().concat($("#second").val()).concat($("#third").val()).concat($("#fourth").val())
    console.log("CODE", this.code, this.verificationCode);
    if (!this.code) {
      this.message = "Code required*";
      return
    } else if (this.code != this.verificationCode) {
      console.log("in if")
      this.message = "Wrong code";
      return
    } else {
      this.message = "";
    }
    let navigationextras: NavigationExtras = {
      state: { data:this.details }
    }
    this.navCtl.navigateForward('/shared/password', navigationextras)
  }
  
}
