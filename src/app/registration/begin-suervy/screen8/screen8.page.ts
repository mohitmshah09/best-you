import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-screen8',
  templateUrl: './screen8.page.html',
  styleUrls: ['./screen8.page.scss'],
})
export class Screen8Page implements OnInit {

  lagecyForm: FormGroup;
 helpArr: any = [];
  timeArr: any = [];
  list = [
    "My Time",
    "I’d Like To Coach",
    "I’d Like To Mentor",
    "I’d Like To Educate",
    "Financial Aid",
    "Provide Internship"
  ]
  list2 = [
    "I’m Happy To Do It Locally",
    "I’m Happy To Do It Internationally",
    "I Can Provide 1 Day A Week",
    "I Can Provide 1 Day A Month",
    "7 Days A Year",
    "More Than 15 Days",
  ]

  constructor(
    public navCtrl: NavController
  ) {
    this.lagecyForm = new FormGroup({
      help: new FormControl(''),
      time: new FormControl('')
    })
  }

  ngOnInit() {
  }


  selectHelpValue(e) {
    if (!this.helpArr.includes(e.detail.value)) {
      this.helpArr.push(e.detail.value);
    } else {
      var index = this.helpArr.indexOf(e.detail.value);
      this.helpArr.splice(index, 1);
    }
    console.log(this.helpArr);
    this.lagecyForm.controls.help.setValue(this.helpArr);
  }

  selectTimeValue(e) {
    if (!this.timeArr.includes(e.detail.value)) {
      this.timeArr.push(e.detail.value);
    } else {
      var index = this.timeArr.indexOf(e.detail.value);
      this.timeArr.splice(index, 1);
    }
    console.log(this.timeArr);
    this.lagecyForm.controls.time.setValue(this.timeArr);
  }

  /**
   * Next screen
   * @param {object} data 
   */
  next(data) {
    console.log(data);
    this.navCtrl.navigateForward('/registration/login')
  }
}
