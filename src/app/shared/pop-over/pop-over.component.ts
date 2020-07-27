import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss'],
})
export class PopOverComponent implements OnInit {

  constructor(
    public navCtrl:NavController,
    public popoverController:PopoverController
  ) { }

  ngOnInit() {}

 async moveToEditProfile(){
    this.navCtrl.navigateForward('/home/profile/edit-profile');
    await this.popoverController.dismiss();
  }

 async moveToChangePsw(){
    this.navCtrl.navigateForward('/home/profile/change-password');
   await this.popoverController.dismiss();
  }
}
