import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-screen4',
  templateUrl: './screen4.page.html',
  styleUrls: ['./screen4.page.scss'],
})
export class Screen4Page implements OnInit {

  interestForm: FormGroup;
  intersetArr: any = [];
  intrestFirstList = [
    "Business Skills",
    "Mindfulness",
    "Blockchain",
    "Music",
    "Book Writing",
    "NLP",
    "Book Publishing",
    "Nutrition",
    "Career change",
    "Podcasts",
    "Coaching",
    "Product Creation",
    "Confidence",
    "Relationships",
    "Copywriting",
    "Revenue Streams",
    "Divorce",
    "Spirituality",
    "Hypnosis",
    "Sports",
    "Love",
    "Social Media",
    "Meditation",
    "Video",
    "Mindset",
    "Weight Loss",
    "Media",
    "Wealth Management",
    "Mentoring",
    "Yoga",
  ]

  constructor(
    public navCtrl:NavController
  ) {
    this.interestForm = new FormGroup({
      intrest: new FormControl('')
    })
  }

  ngOnInit() {
  }

  selectIntrest(e) {
    if (!this.intersetArr.includes(e.detail.value)) {
      this.intersetArr.push(e.detail.value);
    } else {
      var index = this.intersetArr.indexOf(e.detail.value);
      this.intersetArr.splice(index, 1);
    }
    console.log(this.intersetArr);
    this.interestForm.controls.intrest.setValue(this.intersetArr);
  }

  /**
  * Next screen
  * @param {object} data 
  */
  next(data) {
    console.log(data);
    this.navCtrl.navigateForward('/registration/screen5')
  }

}
