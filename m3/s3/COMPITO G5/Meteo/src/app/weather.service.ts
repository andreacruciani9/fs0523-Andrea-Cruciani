import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { iAccessData } from './pages/auth/module/i-access-data.ts';
import { ICity, iNomeCitta } from './module/i-nome-citta.js';
import { ICordinate } from './module/i-cordinate.js';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey = 'ea0e888008f9517c47df38959798dc3f ';

  constructor(private http: HttpClient) {}
  Nomecitta = new Subject<iNomeCitta>();
  cordiate = new Subject<ICordinate>();

  NomeCitta$ = this.Nomecitta.asObservable();
  Cordinate$ = this.cordiate.asObservable();

  getAll(city: string): Observable<ICordinate[]> {
    const apiUrl: string = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit={limit}&appid=${this.apiKey}`;
    return this.http.get<ICordinate[]>(apiUrl);
  }

  getCity(city: ICordinate) {
    const apiUrl = ` http://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${this.apiKey}`;
    return this.http.get<iNomeCitta>(apiUrl);
  }
}
