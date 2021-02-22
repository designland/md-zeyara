import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
