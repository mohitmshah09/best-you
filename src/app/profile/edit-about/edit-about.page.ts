import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.page.html',
  styleUrls: ['./edit-about.page.scss'],
})
export class EditAboutPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  save() {
    this.navCtrl.navigateForward('/home/profile')
  }

}
