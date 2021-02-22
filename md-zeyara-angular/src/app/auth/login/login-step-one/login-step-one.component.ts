import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
@Component({
  selector: 'app-login-step-one',
  templateUrl: './login-step-one.component.html',
  styleUrls: ['./login-step-one.component.scss']
})
export class LoginStepOneComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  constructor(
    public authService: SocialAuthService,
    private router: Router
  ) { }

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  ngOnInit() {}

  onSubmit() {
    // do something here
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(userData => {
      localStorage.setItem('SocialUser', 'true');
      localStorage.setItem('UserName', userData.name);
      localStorage.setItem('UserEmail', userData.email);
      localStorage.setItem('UserImage', userData.photoUrl);
      this.router.navigate(['/login/login-step-two'])
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then(userData => {
      localStorage.setItem('SocialUser', 'true');
      localStorage.setItem('UserName', userData.name);
      localStorage.setItem('UserEmail', userData.email);
      localStorage.setItem('UserImage', userData.photoUrl);
      this.router.navigate(['/login/login-step-two'])
    });
  }

  signOut(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      this.loggedIn = (user != null);
    });
    this.authService.signOut();
      localStorage.removeItem('UserName');
      localStorage.removeItem('UserEmail');
      localStorage.removeItem('UserImage');
  }

}
