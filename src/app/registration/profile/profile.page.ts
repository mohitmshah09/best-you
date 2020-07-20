import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  selectFile(e) {
    console.log(e.target.files)
  }

  /**
   * Sign Up
   */
  signUp() {
    this.navCtrl.navigateForward('/home/feed');
  }
}
