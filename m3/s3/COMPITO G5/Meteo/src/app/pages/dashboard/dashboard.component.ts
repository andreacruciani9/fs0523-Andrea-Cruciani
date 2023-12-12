import { ICordinate } from './../../module/i-cordinate';
import { Component } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { iNomeCitta } from '../../module/i-nome-citta';
import { Observable, map, switchMap, tap } from 'rxjs';
import { ICordinate } from '../../module/i-cordinate';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private weatherSvc: WeatherService) {}
  NomeCitta: iNomeCitta = {
    cod: '',
    message: 0,
    cnt: 0,
    list: [],
    city: '',
    dt: 0,
    main: {},
    weather: [],
    clouds: '',
    wind: '',
    visibility: 0,
    pop: 0,
    dt_txt: '',
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    sea_level: 0,
    grnd_level: 0,
    humidity: 0,
    temp_kf: 0,
    description: '',
    icon: '',
    all: 0,
    speed: 0,
    deg: 0,
    gust: 0,
    '3h': 0,
    pod: '',
    id: 0,
    name: '',
    country: '',
    population: 0,
    timezone: 0,
    sunrise: 0,
    sunset: 0,
    lat: 0,
    lon: 0,
  };
  cordinate: ICordinate={
    name: '',
    lat: 0,
    lon: 0,
    country: '',
    state: ''
  };
  save(data: string): Observable<iNomeCitta> {
    return this.weatherSvc.getAll(data).pipe(switchMap(data) => {
      this.cordinate=data,
  return this.weatherSvc.getCity(data.value)
    });
  }
}



