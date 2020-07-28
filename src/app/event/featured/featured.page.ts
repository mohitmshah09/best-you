import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopOverComponent } from 'src/app/shared/pop-over/pop-over.component';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.page.html',
  styleUrls: ['./featured.page.scss'],
})
export class FeaturedPage implements OnInit {

  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  async presentPopover(id) {
    var yourUl = document.getElementById(id);
    yourUl.style.display = yourUl.style.display == 'none' ? 'block' : 'none';
  }
  
}
