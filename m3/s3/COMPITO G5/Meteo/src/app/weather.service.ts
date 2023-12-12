import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iAccessData } from './pages/auth/module/i-access-data.ts';
import { iNomeCitta } from './module/i-nome-citta.js';
import { ICordinate } from './module/i-cordinate.js';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'ea0e888008f9517c47df38959798dc3f ';

  constructor(private http: HttpClient) {}

  getAll(city: string): Observable<ICordinate> {
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city},{state code},{country code}&limit={limit}&appid=${this.apiKey}`;
    return this.http.get<ICordinate>(apiUrl);
  }

  getCity(city: string): Observable<iNomeCitta> {
    const apiUrl = ` api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}`;
    return this.http.get<iNomeCitta>(apiUrl);
  }
}
