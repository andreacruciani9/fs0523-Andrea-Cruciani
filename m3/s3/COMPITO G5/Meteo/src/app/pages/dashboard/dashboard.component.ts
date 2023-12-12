import { iNomeCitta, ICity } from './../../module/i-nome-citta';
import { ICordinate } from './../../module/i-cordinate';
import { Component } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { Observable } from 'rxjs';

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
  };
  cordinate: ICordinate = {
    name: '',
    lat: 0,
    lon: 0,
    country: '',
    state: '',
  };
  arrCity: [] = [];
  /* save(s: ICordinate) {
    this.weatherSvc.getAll(s).subscribe((data) => {
      this.weatherSvc.getCity(data);
      return this.arrCity.push();
    });
  }*/
}
