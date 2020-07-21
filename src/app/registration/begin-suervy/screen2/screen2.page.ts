import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.page.html',
  styleUrls: ['./screen2.page.scss'],
})
export class Screen2Page implements OnInit {
  urlForm: FormGroup;
  constructor(
    public navCtrl: NavController
  ) {
    this.urlForm = new FormGroup({
      facebookUrl: new FormControl('Https://facebook.com/username'),
      instaUrl: new FormControl('Https://instagram.com/username'),
      twitterUrl: new FormControl('Https://twitter.com/username'),
      wesiteUrl: new FormControl('Https://www.thebestyou.co'),
      youTubeUrl: new FormControl('Https://www.youtube.com/username')
    })
  }

  ngOnInit() {
  }

  /**
   * Next screen
   * @param {object} data 
   */
  next(data) {
    console.log(data);
    this.navCtrl.navigateForward('/registration/screen3')
  }

}
