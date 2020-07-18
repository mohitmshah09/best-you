import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-psw-code',
  templateUrl: './forgot-psw-code.page.html',
  styleUrls: ['./forgot-psw-code.page.scss'],
})
export class ForgotPswCodePage implements OnInit {

  constructor(
    public navCrl: NavController
  ) { }

  ngOnInit() {
  }


  verifyCode() {
    let navigationextras: NavigationExtras = {
      state: { data: 'forgot-psw' }
    }
    this.navCrl.navigateForward('/shared/verify-code', navigationextras)
  }
}
