import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import {PopOverComponent} from '../../shared/pop-over/pop-over.component';

@Component({
  selector: 'app-other-user-profile',
  templateUrl: './other-user-profile.page.html',
  styleUrls: ['./other-user-profile.page.scss'],
})
export class OtherUserProfilePage implements OnInit {
  isOpen: Boolean = false;
  isDisplay: Boolean = true;
  constructor(
    public navCtrl: NavController,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  openModal() {
    this.isOpen = true;
  }


  closeModal() {
    this.isOpen = false;
  }

  changeButton() {
    console.log("change button");
    this.isDisplay = false;
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopOverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
