import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  passwordForm: FormGroup;
  submitted: Boolean = false;
  match = true;
  oldPasswordType: string = 'password';
  oldPasswordIcon: string = 'eye-off-outline'
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off-outline';
  cPasswordType: string = 'password';
  cPasswordIcon: string = 'eye-off-outline';
  isOpen:Boolean = false;

  constructor(
    public navCrl: NavController,
  ) {
    this.passwordForm = new FormGroup({
      oldPasswrod: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
      cPassword: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }


  // Create Validation
  get f() { return this.passwordForm.controls }

  /**
   * Compare password
   * @param form
   */
  comparePassword(form) {
    const message = document.getElementById('message');
    if (form.value.newPassword === form.value.cPassword) {
      this.match = true;
      // message.innerHTML = "Password matched!"
    } else {

    }
  }

  /**
   * Show hide password
   */
  showHideOldPsw() {
    this.oldPasswordType = this.oldPasswordType === 'text' ? 'password' : 'text';
    this.oldPasswordIcon = this.oldPasswordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }


  /**
  * Show hide password
  */
  showHide() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }



  /**
   * Show hide password
   */
  cShowHide() {
    this.cPasswordType = this.cPasswordType === 'text' ? 'password' : 'text';
    this.cPasswordIcon = this.cPasswordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }

  /**
   * Next screen
   */
  next(data) {
    this.isOpen = true;
    const message = document.getElementById('message');
    console.log("-------------------------")
    this.submitted = true;
    if (this.passwordForm.invalid) {
      return
    }
    if (data.newPassword != data.cPassword) {
      this.match = false;
      message.innerHTML = "Passwords must match.";
      return
    } else {
      this.match = true;
      message.innerHTML = "";
    }
    console.log("data", data);
 

  }

  styleObject() {
    if (this.submitted && this.passwordForm.controls.cPassword.invalid) {
      return { 'border-bottom': '3px solid var(--error-color)' }
    }
    if (!this.match) {
      return { 'border-bottom': '3px solid var(--error-color)' }

    }
  }
  closeModal(){
    this.isOpen = false;
  }
  
}
