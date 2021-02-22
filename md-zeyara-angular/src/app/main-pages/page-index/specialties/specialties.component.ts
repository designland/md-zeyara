import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss']
})
export class SpecialtiesComponent implements OnInit {

  constructor() { }
  data: any = [
    'Cancer clinic',
    'Cardiology Clinic'
  ];
  ngOnInit(): void {
  }

}
