import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { BookingInfoComponent } from './booking-info/booking-info.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { VerfiyModalComponent } from './verfiy-modal/verfiy-modal.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperModule, WavesModule } from 'ng-uikit-pro-standard'
// MDB Angular Pro
import { InputsModule, InputUtilitiesModule, ButtonsModule } from 'ng-uikit-pro-standard';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { StepOneComponent } from './register/step-one/step-one.component';
import { StepTwoComponent } from './register/step-two/step-two.component';
import { StepThreeComponent } from './register/step-three/step-three.component';
import { LoginStepOneComponent } from './login/login-step-one/login-step-one.component';
import { LoginStepTwoComponent } from './login/login-step-two/login-step-two.component';

@NgModule({
  declarations: [LoginComponent, BookingInfoComponent, RegisterComponent, ConfirmModalComponent, VerfiyModalComponent, StepOneComponent, StepTwoComponent, StepThreeComponent, LoginStepOneComponent, LoginStepTwoComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
		NgxIntlTelInputModule,
    BrowserAnimationsModule,
    StepperModule,
    WavesModule,
    InputsModule,
    InputUtilitiesModule,
    ButtonsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '645311973248-osiiv080obbhefj9cm6d72bp2mj22vfd.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1017510718770573')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
})
export class AuthModule { }
