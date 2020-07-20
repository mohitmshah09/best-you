import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-forgot-psw',
  templateUrl: './forgot-psw.page.html',
  styleUrls: ['./forgot-psw.page.scss'],
})
export class ForgotPswPage implements OnInit {
  forgotForm:FormGroup;
  submitted:Boolean = false;

  constructor(
    public navCtr:NavController
  ) {
    this.forgotForm = new FormGroup({
      phoneNumber:new FormControl('',[Validators.required])
    })
   }

  ngOnInit() {
  }

  get f(){return this.forgotForm.controls}

  /**
   * reset password
   * @param {object} data 
   */
  resetPsw(data){
    this.submitted = true;
    if(this.forgotForm.invalid){
      return
    }
    console.log(data);
    let navigationextras:NavigationExtras = {
      state:{
        data:JSON.stringify(data)
      }
    }
    this.navCtr.navigateForward('/registration/forgot-psw-code',navigationextras)
  }

}
