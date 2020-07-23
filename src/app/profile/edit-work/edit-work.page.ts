import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-work',
  templateUrl: './edit-work.page.html',
  styleUrls: ['./edit-work.page.scss'],
})
export class EditWorkPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  save() {
    this.navCtrl.navigateForward('/home/profile')
  }
}
