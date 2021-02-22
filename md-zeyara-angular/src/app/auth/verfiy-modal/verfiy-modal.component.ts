import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-verfiy-modal',
  templateUrl: './verfiy-modal.component.html',
  styleUrls: ['./verfiy-modal.component.scss']
})
export class VerfiyModalComponent implements OnInit {
  @Input() secondStep:Boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
