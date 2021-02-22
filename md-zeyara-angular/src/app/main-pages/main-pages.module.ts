import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleterModule, InputsModule } from 'ng-uikit-pro-standard';
import { MainModule } from '../main/main.module';
import { HomeModule } from '../home/home.module';
import { MainPagesRoutingModule } from './main-pages-routing.module';
import { MentalHealthComponent } from './page-index/mental-health/mental-health.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { SpecialtiesComponent } from './page-index/specialties/specialties.component';
import { LovedOnesComponent } from './page-index/loved-ones/loved-ones.component';
import { SpecialtiesHeroComponent } from './page-index/specialties/specialties-hero/specialties-hero.component';
import { SpecialtiesListComponent } from './page-index/specialties/specialties-list/specialties-list.component';


@NgModule({
  declarations: [
    MentalHealthComponent,
    PageIndexComponent,
    SpecialtiesComponent,
    LovedOnesComponent,
    SpecialtiesHeroComponent,
    SpecialtiesHeroComponent,
    SpecialtiesListComponent
  ],
  imports: [
    CommonModule,
    MainPagesRoutingModule,
    MainModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleterModule,
    InputsModule,
  ]
})
export class MainPagesModule { }
