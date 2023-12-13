import { WeatherService } from './../../weather.service';
import { Component, Input } from '@angular/core';
import { IloveIt } from '../../module/ilove-it';
import { ICordinate } from '../../module/i-cordinate';
import { iNomeCitta } from '../../module/i-nome-citta';
import { Iuser } from '../../module/iuser';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../pages/auth/auth.service';
import { CittaPreferiteService } from '../../pages/home/citta-preferite.service';
import { iAccessData } from '../../pages/auth/module/i-access-data.ts';

@Component({
  selector: 'app-citta-selezionata',
  templateUrl: './citta-selezionata.component.html',
  styleUrl: './citta-selezionata.component.scss',
})
export class CittaSelezionataComponent {
  @Input() loveArr!: IloveIt[] | undefined;
  geolocal!: ICordinate;
  tempoCitta!: iNomeCitta;
  NomeCitta!: string;
  population!: number;
  humidity!: number;
  tempMax!: number;
  tempMin!: number;
  cityCountry!: string;
  cityState!: string;
  logged!: boolean;
  loggedUser!: iAccessData | null;
  alredylove!: boolean;
  love: IloveIt = {
    geodataCity: undefined,
    WeatherCity: undefined,
    Iduser: '0',
  };
  constructor(
    private router: Router,
    private WeatherSvc: WeatherService,
    private loveSvc: CittaPreferiteService,
    private authsvc: AuthService
  ) {
    this.WeatherSvc.Cordinate$.subscribe((cordinate) => {
      this.geolocal = cordinate;
      this.NomeCitta = cordinate.local_names?.it
        ? cordinate.local_names.it
        : cordinate.name;
      this.cityCountry = cordinate.country;
      this.cityState = cordinate.state;
      this.loveArr?.forEach((e) => {
        if (e.geodataCity?.name === cordinate.name) {
          this.alredylove = true;
        } else {
          this.alredylove = false;
        }
      });
    });
    this.WeatherSvc.NomeCitta$.subscribe((citta) => {
      this.tempoCitta = citta;
      this.population = citta.city.population;
      this.humidity = citta.list[0].main.humidity;
      this.tempMax = Math.round(citta.list[0].main.temp_max);
      this.tempMin = Math.floor(citta.list[0].main.temp_min);
    });
  }
  ngOnInit() {
    this.authsvc.user$.subscribe((user) => (this.loggedUser = user));
    this.authsvc.isLoggedIn$.subscribe((user) => {
      this.logged = !user;
    });
  }

  addlove() {
    if (!this.tempoCitta && !this.geolocal) return;
    this.love.geodataCity = this.geolocal;
    this.love.WeatherCity = this.tempoCitta;
    // if (!this.logged) {
    //   alert('please try acess');
    //   this.router.navigate(['/app']);
    //   return;
    // }
    this.love.Iduser = this.loggedUser?.user.id;
    this.loveSvc.addIloveit(this.love).subscribe((love) => {
      this.loveArr?.push(love);
      this.alredylove = true;
    });
  }
  // remuvelove(id:number|undefined) {
  //   this.loveArr?.forEach((l) => {
  //     if (l.Iduser == this.loggedUser?.user.id && l.geodataCity?.name) {
  //       if (!l.id) return;
  //       this.loveSvc.deleteIloveit(l.id).subscribe((l) => {
  //         this.alredylove = false;
  //         this.loveSvc=this.loveArr?.filter(l=>l.id!=id)

  //         }

  //         let index: number | undefined
  //         if (index != undefined) {
  //          this.loveArr?.indexOf(index);
  //         }
  //          if (!index) return;
  //          this.loveArr?.splice(index, 1);
  //       });
  //     }
  //   });
  // }
  remuvelove(id: number | undefined) {
    // Verifica se l'id è definito
    if (id === undefined) {
      // Gestione nel caso l'id sia undefined
      console.error('ID is undefined');
      return;
    }

    // Verifica se loveArr è definito prima di eseguire forEach
    if (this.loveArr !== undefined) {
      this.loveArr.forEach((l, index) => {
        // Aggiunto index per ottenere l'indice
        if (l.Iduser == this.loggedUser?.user.id && l.geodataCity?.name) {
          if (l.id === id) {
            if (!l.id) return;
            // Chiamata al servizio per eliminare l'elemento
            this.loveSvc.deleteIloveit(l.id).subscribe(() => {
              // Rimuovi l'elemento dall'array loveArr utilizzando splice
              this.loveArr?.splice(index, 1);
              this.alredylove = false;
            });
          }
        }
      });
    }
  }
}
