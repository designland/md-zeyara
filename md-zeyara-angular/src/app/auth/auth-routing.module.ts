import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StepOneComponent } from './register/step-one/step-one.component';
import { StepTwoComponent } from './register/step-two/step-two.component';
import { StepThreeComponent } from './register/step-three/step-three.component';
import { LoginStepOneComponent } from './login/login-step-one/login-step-one.component';
import { LoginStepTwoComponent } from './login/login-step-two/login-step-two.component';
const routes: Routes = [
  { path: '', component:LoginComponent,
    children: [
      { path:'login/login-step-one', component:LoginStepOneComponent },
      { path:'login/login-step-two', component:LoginStepTwoComponent },
    ]
  },
  {
    path: '', component:RegisterComponent,
    children: [
      { path:'register/step-one', component:StepOneComponent },
      { path:'register/step-two', component:StepTwoComponent },
      { path:'register/step-three', component:StepThreeComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
