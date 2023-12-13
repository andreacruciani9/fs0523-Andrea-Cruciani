import { iNomeCitta, ICity, IList } from './../../module/i-nome-citta';
import { ICordinate } from './../../module/i-cordinate';
import { Component } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Iuser } from '../../module/iuser';
import { iAccessData } from '../auth/module/i-access-data.ts';
import { CittaPreferiteService } from '../home/citta-preferite.service';
import { IloveIt } from '../../module/ilove-it';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(
    private weatherSvc: WeatherService,
    private authSvc: AuthService,
    private loveSvc: CittaPreferiteService
  ) {
    this.authSvc.user$.subscribe((user) => (this.logger = user));
    this.authSvc.isLoggedIn$.subscribe((user) => {
      this.logged = !!user;
    });
  }
  nome: string = '';
  searchOk: boolean = false;
  NameTrovato!: ICordinate[];
  cityScelta!: ICordinate;
  citysection: boolean = false;
  tempo!: IList[];
  logged!: boolean;
  logger!: iAccessData | null;
  userlovearr!: IloveIt[] | undefined;
  NomeCitta: iNomeCitta = {
    cod: '',
    message: 0,
    cnt: 0,
    list: [],
    city: {
      id: 0,
      name: '',
      coord: {
        lat: 0,
        lon: 0,
      },
      country: '',
      population: 0,
      timezone: 0,
      sunrise: 0,
      sunset: 0,
    },
  };
  cordinate: ICordinate = {
    name: '',
    lat: 0,
    lon: 0,
    country: '',
    state: '',
  };
  arrCity: [] = [];

  ngOnInit() {
    if (this.logged && this.logger) {
      this.loveSvc
        .getIloveItById(this.logger.user.id)
        .subscribe((data) => (this.userlovearr = data));
    }
  }

  save(nome: string) {
    if (this.nome == '') return;
    this.weatherSvc.getAll(this.nome).subscribe((data) => {
      this.searchOk = true;
      this.NameTrovato = data; // this.weatherSvc.getCity().subscribe((city) => {
      console.log(this.NameTrovato);
    });
  }
  getCity(nome: ICordinate) {
    this.cityScelta = nome;
    console.log(this.cityScelta);
    this.searchOk = false;
    this.citysection = true;

    let nomeCity = nome.local_names?.it
      ? this.cityScelta.local_names?.it
      : nome.name;
    this.nome = `${nomeCity},${nome.country},${nome.state}`;
    this.weatherSvc.getCity(nome).subscribe((data) => {
      this.tempo = data.list;
    });
  }
}
