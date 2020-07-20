import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-psw-code',
  templateUrl: './forgot-psw-code.page.html',
  styleUrls: ['./forgot-psw-code.page.scss'],
})
export class ForgotPswCodePage implements OnInit {
  phnNumber: any;
  constructor(
    public navCrl: NavController,
    public router: Router
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      console.log(this.router.getCurrentNavigation().extras.state.data)
      this.phnNumber = this.router.getCurrentNavigation().extras.state.data;
      this.phnNumber = JSON.parse(this.phnNumber).phoneNumber
    }
  }

  ngOnInit() {
  }


  verifyCode() {
    let navigationextras: NavigationExtras = {
      state: { data: 'forgot-psw' }
    }
    this.navCrl.navigateForward('/shared/verify-code', navigationextras)
  }
}
