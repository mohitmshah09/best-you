import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-screen5',
  templateUrl: './screen5.page.html',
  styleUrls: ['./screen5.page.scss'],
})
export class Screen5Page implements OnInit {

  doForm: FormGroup;
  intersetArr: any = [];
  list = [
    "Business Skills",
    "Blockchain",
    "Coaching",
    "Confidence",
    "Copywriting",
    "Creating Revenue Streams",
    "Getting Their Book Published",
    "Love",
    "Meditation",
    "Mentoring",
    "Mindfulness",
    "Product Creation",
    "Public Speaking",
    "Relationships",
    "Social Media",
    "Yoga",
  ]

  constructor(
    public navCtrl: NavController
  ) {
    this.doForm = new FormGroup({
      intrest: new FormControl('')
    })
  }

  ngOnInit() {
  }

  selectValue(e) {
    if (!this.intersetArr.includes(e.detail.value)) {
      this.intersetArr.push(e.detail.value);
    } else {
      var index = this.intersetArr.indexOf(e.detail.value);
      this.intersetArr.splice(index, 1);
    }
    console.log(this.intersetArr);
    this.doForm.controls.intrest.setValue(this.intersetArr);
  }

  /**
  * Next screen
  * @param {object} data 
  */
  next(data) {
    console.log(data);
    this.navCtrl.navigateForward('/registration/screen6')
  }


}
