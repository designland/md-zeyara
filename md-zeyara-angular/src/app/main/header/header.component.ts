import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: string;
  constructor() { }
  isLogin: boolean;
  ngOnInit(): void {
    if(localStorage.getItem('SocialUser') && localStorage.getItem('SocialUser') === 'true') {
      this.isLogin = true;
      this.currentUser = localStorage.getItem('UserName');
    } else {
        this.isLogin = false;
      }
  }

}
