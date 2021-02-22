import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from '../main/main.module';
import { HomeModule } from '../home/home.module';
import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { OnlinePharmacyComponent } from './online-pharmacy/online-pharmacy.component';
import { StepsIndexComponent } from './steps-index/steps-index.component';
import { CountryStepComponent } from './country-step/country-step.component';
import { SigninStepComponent } from './signin-step/signin-step.component';
import { AddressStepComponent } from './address-step/address-step.component';
import { AddMedicationsStepComponent } from './add-medications-step/add-medications-step.component';
import { PaymentStepComponent } from './payment-step/payment-step.component';


@NgModule({
  declarations: [OnlinePharmacyComponent, StepsIndexComponent, CountryStepComponent, SigninStepComponent, AddressStepComponent, AddMedicationsStepComponent, PaymentStepComponent],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    MainModule,
    HomeModule,
  ]
})
export class PharmacyModule { }
