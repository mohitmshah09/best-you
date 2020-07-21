import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-screen6',
  templateUrl: './screen6.page.html',
  styleUrls: ['./screen6.page.scss'],
})
export class Screen6Page implements OnInit {

  passionForm: FormGroup;
  passionArr: any = [];
  passionList = [
    "Enjoying Life",
    "Feeling and Looking Good",
    "Inner You - Spirituality",
    "Live, Love, Legacy",
    "Passion To Profit",
    "Wealth and Riches",
    "Yoga - Mindfulness",
  ]

  constructor(
    public navCtrl: NavController
  ) {
    this.passionForm = new FormGroup({
      passion: new FormControl('')
    })
  }

  ngOnInit() {
  }

  selectValue(e) {
    if (!this.passionArr.includes(e.detail.value)) {
      this.passionArr.push(e.detail.value);
    } else {
      var index = this.passionArr.indexOf(e.detail.value);
      this.passionArr.splice(index, 1);
    }
    console.log(this.passionArr);
    this.passionForm.controls.passion.setValue(this.passionArr);
  }

  /**
  * Next screen
  * @param {object} data 
  */
  next(data) {
    console.log(data);
    this.navCtrl.navigateForward('/registration/screen7')
  }

}
