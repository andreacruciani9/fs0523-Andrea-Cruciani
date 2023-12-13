import { Component } from '@angular/core';
import { ICordinate } from '../../../module/i-cordinate';
import { WeatherService } from '../../../weather.service';
import { CittaPreferiteService } from '../../home/citta-preferite.service';
import { AuthService } from '../../auth/auth.service';
import { IloveIt } from '../../../module/ilove-it';
import { iAccessData } from '../../auth/module/i-access-data.ts';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.scss',
})
export class PreferitiComponent {
  logged!: boolean;
  show!: boolean;
  logger!: iAccessData | null;
  userLovearr: IloveIt[] | undefined;
  userPrefArr: any;
  geolocal: any;
  constructor(
    private loveSvc: CittaPreferiteService,
    private weaterSvc: WeatherService,
    private authSvc: AuthService
  ) {
    this.loveSvc.cittaIloveIt$.subscribe((data) =>
      this.userLovearr?.push(data)
    );
  }
  userName: string | undefined = '';
  ngOnInit() {
    this.authSvc.isLoggedIn$.subscribe((user) => (this.logged = user));
    this.authSvc.user$.subscribe((user) => (this.logger = user));
    if (this.logged && this.logger) {
      this.loveSvc
        .getIloveItById(this.logger.user.id)
        .subscribe((data) => (this.userLovearr = data));
    }
  }

  search(geolocal: ICordinate) {
    if (!geolocal) return;
    this.weaterSvc.getCity(geolocal).subscribe();
  }

  remuvelove(id: number | undefined) {
    if (!id) return;
    this.loveSvc
      .deleteIloveit(id)
      .subscribe(
        () => (this.userLovearr = this.userLovearr?.filter((l) => l.id != id))
      );
  }
}
