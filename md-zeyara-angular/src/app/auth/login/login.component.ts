import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookingService } from 'src/app/services/booking.service';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  constructor(
    public bookingService:BookingService,
    private authService: SocialAuthService
  ) { }
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      localStorage.setItem('UserName', this.user.name);
      localStorage.setItem('UserEmail', this.user.email);
      localStorage.setItem('UserImage', this.user.photoUrl);
    });
  }

  onSubmit() {
    // do something here
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(user => {
      localStorage.setItem('UserName', this.user.name);
      localStorage.setItem('UserEmail', this.user.email);
      localStorage.setItem('UserImage', this.user.photoUrl);
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then(user => {
      localStorage.setItem('UserName', this.user.name);
      localStorage.setItem('UserEmail', this.user.email);
      localStorage.setItem('UserImage', this.user.photoUrl);
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
  bookMySelf() {
    const bookingFirstOption = document.querySelector('.visit-option>.first-option');
    const myBook = document.querySelector('.my-book');
    const otherBook = document.querySelector('.visitor-info');
    bookingFirstOption.addEventListener("click", function() {
      myBook.classList.remove('hide');
      myBook.classList.add('show');
      otherBook.classList.remove('show');
      otherBook.classList.add('hide')
    });
  }
  bookOthers() {
    const bookingSecondOption = document.querySelector('.visit-option>.second-option');
    const myBook = document.querySelector('.my-book');
    const otherBook = document.querySelector('.visitor-info');
    bookingSecondOption.addEventListener("click", function() {
      myBook.classList.remove('show');
      myBook.classList.add('hide');
      otherBook.classList.remove('hide');
      otherBook.classList.add('show');
    });
  }
}
