import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-basic-info',
  templateUrl: './edit-basic-info.page.html',
  styleUrls: ['./edit-basic-info.page.scss'],
})
export class EditBasicInfoPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  save() {
    this.navCtrl.navigateForward('/home/profile')
  }

}
