import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {

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
      this.router.navigate(['/register/step-two'])
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then(userData => {
      localStorage.setItem('SocialUser', 'true');
      localStorage.setItem('UserName', userData.name);
      localStorage.setItem('UserEmail', userData.email);
      localStorage.setItem('UserImage', userData.photoUrl);
      this.router.navigate(['/register/step-two'])
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

  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});

}
