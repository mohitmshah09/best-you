import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  passwordForm: FormGroup;
  submitted: Boolean = false;
  match = false;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off-outline';
  cPasswordType: string = 'password';
  cPasswordIcon: string = 'eye-off-outline';
  constructor() {
    this.passwordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
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
    if (form.value.password === form.value.cPassword) {
      this.match = true;
      // message.innerHTML = "Password matched!"
    } else {

    }
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
    const message = document.getElementById('message');
    console.log("-------------------------")
    this.submitted = true;
    if (this.passwordForm.invalid) {
      return
    }
    if (data.password != data.cPassword) {
      this.match = false;
      message.innerHTML = "Passwords must match."
    }
    console.log("data", data);
    //  this.navCrl.navigateForward('/shared/verify-code')
  }
}
