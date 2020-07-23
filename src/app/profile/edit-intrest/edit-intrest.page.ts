import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-intrest',
  templateUrl: './edit-intrest.page.html',
  styleUrls: ['./edit-intrest.page.scss'],
})
export class EditIntrestPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  save() {
    this.navCtrl.navigateForward('/home/profile')
  }

}
