import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'jv-detalid-weather',
  templateUrl: './detalid-weather.component.html',
  styleUrls: ['./detalid-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetalidWeatherComponent {

  @Input() weather: Weather;

  ngOnInit() {
    console.log(this.weather)
  }

  get weatherIcon(): string {
    return `http://openweathermap.org/img/wn/${ this.weather.icon }@2x.png`;
  }
}
