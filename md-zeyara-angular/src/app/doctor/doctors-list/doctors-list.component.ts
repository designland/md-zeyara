import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {

  constructor() { }

  disabled = false;
  compact = false;
  invertX = false;
  invertY = false;

  shown: 'native' | 'hover' | 'always' = 'native';

  ngOnInit(): void {
  }

}
