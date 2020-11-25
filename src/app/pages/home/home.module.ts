import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { StoreModule } from '@ngrx/store';

import { HomePage } from './containers/home/home.page';
import { homeReducer } from './state/home.reduce';

import { HomeEffects } from './state/home.effects';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    ComponentsModule, 
  ],
  declarations: [
    HomePage,
    CurrentWeatherComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
