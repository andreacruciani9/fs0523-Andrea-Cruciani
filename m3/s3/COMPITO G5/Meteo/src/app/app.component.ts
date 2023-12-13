import { Component } from '@angular/core';
import { AuthService } from './pages/auth/auth.service';
import { CittaPreferiteService } from './pages/home/citta-preferite.service';
import { WeatherService } from './weather.service';
import { Iuser } from './module/iuser';
import { IloveIt } from './module/ilove-it';
import { iAccessData } from './pages/auth/module/i-access-data.ts';
import { ICordinate } from './module/i-cordinate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Meteo';
}
