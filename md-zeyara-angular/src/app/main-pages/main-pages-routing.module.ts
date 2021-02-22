import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MentalHealthComponent } from './page-index/mental-health/mental-health.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { SpecialtiesComponent } from './page-index/specialties/specialties.component';
import { LovedOnesComponent } from './page-index/loved-ones/loved-ones.component';

const routes: Routes = [
  { path: '', component:PageIndexComponent,
    children: [
      { path:'mental-health', component:MentalHealthComponent },
      { path:'loved-ones', component:LovedOnesComponent },
      { path:'specialties', component:SpecialtiesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPagesRoutingModule { }
