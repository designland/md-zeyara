import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmoothscrollModule, PageScrollService, WavesModule } from 'ng-uikit-pro-standard'

import { DoctorRoutingModule } from './doctor-routing.module';
import { MainModule } from '../main/main.module';
import { HomeModule } from '../home/home.module';
import { DoctorIndexComponent } from './doctor-index/doctor-index.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [DoctorIndexComponent, DoctorsListComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    MainModule,
    HomeModule,
    SmoothscrollModule,
    WavesModule,

  ],
  providers: [PageScrollService]
})
export class DoctorModule { }
