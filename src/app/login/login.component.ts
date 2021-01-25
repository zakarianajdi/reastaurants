import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public authStatus: boolean = false;
  authForm: FormGroup;

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.authStatus = this.authService.isAuth;
  }

  initForm() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSignIn() {
    const form = this.authForm.value;

    this.authService.signIn(form['email'], form['password']).then(
      () => {
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['/restaurants']);
      }
    );
  }

}
