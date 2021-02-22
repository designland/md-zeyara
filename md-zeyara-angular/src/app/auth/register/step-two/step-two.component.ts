import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {
  userName: string;
  userEmail: string;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('SocialUser') && localStorage.getItem('SocialUser') === 'true') {
      this.userName = localStorage.getItem('UserName');
      this.userEmail = localStorage.getItem('UserEmail');
    } else {
      this.userName = '';
      this.userEmail = '';
    }
  }

}
