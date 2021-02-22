import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { DrModel } from '../../models/doctor.model';

@Component({
  selector: 'app-doctors-slider',
  templateUrl: './doctors-slider.component.html',
  styleUrls: ['./doctors-slider.component.scss']
})
export class DoctorsSliderComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
  doctors = [
    {img: "assets/images/doctors/d1.png"},
    {img: "assets/images/doctors/d2.png"},
    {img: "assets/images/doctors/d3.png"},
    {img: "assets/images/doctors/d4.png"},
    {img: "assets/images/doctors/d5.png"},
    {img: "assets/images/doctors/d6.png"},
    {img: "assets/images/doctors/d7.png"},
    {img: "assets/images/doctors/d3.png"},
  ]
  // doctors: DrModel[] = [];
  slideConfig = {
    "autoplay": true,
    "autoplaySpeed": 2000,
    "infinite": true,
    "slidesToShow": 7,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "asNavFor": '.slider-for',
    "dots": false,
    "arrows": false,
    "centerMode": true,
    "focusOnSelect": true,
    "responsive": [{
            "breakpoint": 992,
            "settings": {
                "slidesToShow": 5,
                "slidesToScroll": 1
            }
        },
        {
            "breakpoint": 768,
            "settings": {
                "slidesToShow": 3,
                "slidesToScroll": 1
            }
        },

        {
            "breakpoint": 400,
            "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1
            }
        }
    ]
  };
  slideConfig2 = {
    "autoplay": true,
    "autoplaySpeed": 2000,
    "infinite": true,
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": false,
    "fade": true,
    "asNavFor": '.slider-nav'
   }
  ngOnInit(): void {
    // this.http.get<DrModel[]>(environment.webapi + '/doctor').subscribe((sliderDr:any) => {
    //   this.doctors = sliderDr
    // });
  }
}
