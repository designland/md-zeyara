import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlinePharmacyComponent } from './online-pharmacy/online-pharmacy.component';
import { StepsIndexComponent } from './steps-index/steps-index.component';
import { CountryStepComponent } from './country-step/country-step.component';
import { SigninStepComponent } from './signin-step/signin-step.component';
import { AddressStepComponent } from './address-step/address-step.component';
import { AddMedicationsStepComponent } from './add-medications-step/add-medications-step.component';
import { PaymentStepComponent } from './payment-step/payment-step.component';
const routes: Routes = [
  { path: 'pharmacy', component:OnlinePharmacyComponent},
  { path: '', component:StepsIndexComponent,
    children: [
      { path: 'pharmacy/select-country', component:CountryStepComponent},
      { path: 'pharmacy/sign-in', component:SigninStepComponent},
      { path: 'pharmacy/add-address', component:AddressStepComponent},
      { path: 'pharmacy/add-medications', component:AddMedicationsStepComponent},
      { path: 'pharmacy/payment', component:PaymentStepComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyRoutingModule { }
