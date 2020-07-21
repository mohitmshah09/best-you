import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.page.html',
  styleUrls: ['./screen3.page.scss'],
})
export class Screen3Page implements OnInit {

  surveyForm: FormGroup;
  waitingBoxArr:any = [];
  spareTimeArr:any=[];
  constructor(
    public navCtrl: NavController
  ) {
    this.surveyForm = new FormGroup({
      wantingBox: new FormControl(''),
      spareTime: new FormControl(''),
      
    })
  }

  ngOnInit() {
  }

  /**
   * Set flight tire preferences
   */
  selectWaitingBox(e) {
    if (!this.waitingBoxArr.includes(e.detail.value)) {
      this.waitingBoxArr.push(e.detail.value);
    } else {
      var index = this.waitingBoxArr.indexOf(e.detail.value);
      this.waitingBoxArr.splice(index, 1);
    }
    console.log(this.waitingBoxArr);
    this.surveyForm.controls.wantingBox.setValue(this.waitingBoxArr);
  }
  

  selectspareTime(e){
    if (!this.spareTimeArr.includes(e.detail.value)) {
      this.spareTimeArr.push(e.detail.value);
    } else {
      var index = this.spareTimeArr.indexOf(e.detail.value);
      this.spareTimeArr.splice(index, 1);
    }
    console.log(this.spareTimeArr);
    this.surveyForm.controls.spareTime.setValue(this.spareTimeArr);
  }

  /**
   * Next screen
   * @param {object} data 
   */
  next(data) {
    console.log(data);
    this.navCtrl.navigateForward('/registration/screen4')
  }

}
