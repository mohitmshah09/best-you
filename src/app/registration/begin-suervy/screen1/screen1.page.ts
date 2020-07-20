import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.page.html',
  styleUrls: ['./screen1.page.scss'],
})
export class Screen1Page implements OnInit {

  profileForm: FormGroup;

  constructor(
    public navCtrl:NavController
  ) {
    this.profileForm = new FormGroup({
      email: new FormControl(''),
      gender: new FormControl(''),
      relationshipStatus: new FormControl(''),
      dob: new FormControl(''),
      profession: new FormControl(''),

    })
  }

  ngOnInit() {
  }

  next(data) {
    console.log(data);
    this.navCtrl.navigateForward('/registration/screen2')
  }
}
