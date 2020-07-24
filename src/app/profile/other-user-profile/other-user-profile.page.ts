import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
declare const $: any;

@Component({
  selector: 'app-other-user-profile',
  templateUrl: './other-user-profile.page.html',
  styleUrls: ['./other-user-profile.page.scss'],
})
export class OtherUserProfilePage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    $("[data-toggle=popover][data-container=body]").each(function (i, obj) {

      $(this).popover({
        html: true,
        //trigger: 'focus', //  close on click elsewhere
        //PROBLEM: clicking button again doesn't close.
        content: function () {
          var id = $(this).attr('data-popover-content')
          return $('#popover-content-' + id).html();
        }
      });

    });
    $(document).on('click', '#edit-profile-btn', () => {
      this.navCtrl.navigateForward('/home/profile/edit-profile');
      $('[data-toggle="popover"]').popover('hide');
    });
    $(document).on('click', '#change-psw-btn', () => {
      this.navCtrl.navigateForward('/home/profile/change-password');
      $('[data-toggle="popover"]').popover('hide');
    });

  }


  fun() {
    console.log("clicked")
  }
}
