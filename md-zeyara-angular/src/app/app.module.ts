import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SmoothscrollModule, WavesModule } from 'ng-uikit-pro-standard'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';
import { HomeModule } from './home/home.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleterModule, InputsModule } from 'ng-uikit-pro-standard';
import { AuthModule } from './auth/auth.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { MainPagesModule } from './main-pages/main-pages.module';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { UserAccountModule } from './user-account/user-account.module';
import { DoctorModule } from './doctor/doctor.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainModule,
    HomeModule,
    SlickCarouselModule,
    MatAutocompleteModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleterModule,
    InputsModule,
    NgxIntlTelInputModule,
    MainPagesModule,
    PharmacyModule,
    UserAccountModule,
    DoctorModule,
    SmoothscrollModule,
    WavesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
