import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;
  config = {
    length: 4,
    disableAutoFocus: false,
    inputStyles:{
      border:'1px solid var(--input-border-color)',
      outline:'none',
      'font-weight':'bold',
      'font-size': '24px'
    },
    placeholder: '',
  };
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


  onOtpChange(otp) {
    this.code = otp;
    console.log("code",this.code)
  }


  /**
   * Verify code
   */
  next() {
    console.log("CODE", this.code, this.verificationCode);
    if (!this.code) {
      this.message = "Code required*";
      this.config.inputStyles.border ='3px solid #F75165'
      
      return
    } else if (this.code != this.verificationCode) {
      console.log("in if")
      this.message = "Wrong code";
      this.config.inputStyles.border =this.config.inputStyles.border ='3px solid #F75165'

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
