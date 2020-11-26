import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { DetalidWeatherComponent } from './detalid-weather/detalid-weather.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoaderComponent,
    DetalidWeatherComponent,
  ],
})
export class ComponentsModule {
}
