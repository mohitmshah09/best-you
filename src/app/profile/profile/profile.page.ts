import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopOverComponent } from '../../shared/pop-over/pop-over.component';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  isVisible: Boolean = false;
  constructor(
    public popoverController:PopoverController
  ) { }
  
  onScroll(e) {
    if (e.detail.scrollTop > 30) {
      this.isVisible = true;
    }else{
      this.isVisible = false;
    }
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
