import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorIndexComponent } from './doctor-index/doctor-index.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';

const routes: Routes = [
  { path: '', component:DoctorIndexComponent,
    children: [
      { path: 'doctors/:cilinc-name', component:DoctorsListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
