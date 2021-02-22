import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { IndexComponent } from './index/index.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { DoctorsSliderComponent } from './doctors-slider/doctors-slider.component';
import { QuestionsSectionComponent } from './questions-section/questions-section.component';
import { OneToOneComponent } from './one-to-one/one-to-one.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleterModule, InputsModule } from 'ng-uikit-pro-standard';
import { MainModule } from '../main/main.module';

@NgModule({
  declarations: [HeroSectionComponent, IndexComponent, HowItWorkComponent, DoctorsSliderComponent, QuestionsSectionComponent, OneToOneComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleterModule,
    InputsModule,
    MainModule
  ],
  exports: [
    HowItWorkComponent,
    DoctorsSliderComponent,
    QuestionsSectionComponent,
    OneToOneComponent
  ]
})
export class HomeModule { }
