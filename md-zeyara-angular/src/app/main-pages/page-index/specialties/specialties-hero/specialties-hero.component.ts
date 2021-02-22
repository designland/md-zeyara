import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-specialties-hero',
  templateUrl: './specialties-hero.component.html',
  styleUrls: ['./specialties-hero.component.scss']
})
export class SpecialtiesHeroComponent implements OnInit {

  constructor() { }
  ClinicSearch:FormGroup;
  myControl = new FormControl();
  searchText = new Subject();
  results: Observable<string[]>;
  @Input() data:string[];
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
    const filterValue = value && value.toLowerCase();
    return this.data.filter((item: string) => item && item.toLowerCase().includes(filterValue));
  }

}
