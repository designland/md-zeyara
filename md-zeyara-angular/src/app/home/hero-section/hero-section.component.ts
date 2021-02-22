import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  constructor() { }
  ClinicSearch:FormGroup;
  myControl = new FormControl();
  searchText = new Subject();
  results: Observable<string[]>;
  data: any = [
    'Cancer clinic',
    'Cardiology Clinic'
  ];
  filteredOptions: Observable<string[]>;

  ngOnInit(): void {
    this.ClinicSearch = new FormGroup({
      clinic_search: new FormControl(),
    });
    this.results = this.searchText.pipe(
      startWith(''),
      map((value: string) => this.filter(value))
    );
  }
  filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.data.filter((item: string) => item.toLowerCase().includes(filterValue));
  }
}
