import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-screen7',
  templateUrl: './screen7.page.html',
  styleUrls: ['./screen7.page.scss'],
})
export class Screen7Page implements OnInit {

  lagecyForm: FormGroup;
  bugArr: any = [];
  lagecyArr:any = [];
  list = [
    "Homelessness",
    "Death By Suicide",
    "Slavery",
    "Sexual Trafficking",
    "Plastic",
    "Global Warming",
    "Animal Extinction"
  ]

  constructor(
    public navCtrl: NavController
  ) {
    this.lagecyForm = new FormGroup({
      lagecy:new FormControl(''),
      bug: new FormControl('')
    })
  }

  ngOnInit() {
  }


  selectValue(e){
    if (!this.lagecyArr.includes(e.detail.value)) {
      this.lagecyArr.push(e.detail.value);
    } else {
      var index = this.lagecyArr.indexOf(e.detail.value);
      this.lagecyArr.splice(index, 1);
    }
    console.log(this.lagecyArr);
    this.lagecyForm.controls.lagecy.setValue(this.lagecyArr);
  }

  selectBugValue(e) {
    if (!this.bugArr.includes(e.detail.value)) {
      this.bugArr.push(e.detail.value);
    } else {
      var index = this.bugArr.indexOf(e.detail.value);
      this.bugArr.splice(index, 1);
    }
    console.log(this.bugArr);
    this.lagecyForm.controls.bug.setValue(this.bugArr);
  }

 /**
  * Next screen
  * @param {object} data 
  */
  next(data) {
    console.log(data);
    this.navCtrl.navigateForward('/registration/screen8')
  }


}
