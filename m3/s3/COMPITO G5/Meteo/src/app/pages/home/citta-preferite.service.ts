import { Iuser } from './../../module/iuser';
import { Injectable } from '@angular/core';
import { IloveIt } from '../../module/ilove-it';
import { Observable, Subject, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CittaPreferiteService {
  CityFavorite = new Subject<IloveIt>();
  cittaIloveIt$ = this.CityFavorite.asObservable();
  constructor(private http: HttpClient) {}
  apiUrlpref: string = `${environment.apiUrl}/prefCities`;

  getIloveIt(): Observable<IloveIt[]> {
    return this.http.get<IloveIt[]>(this.apiUrlpref);
  }

  getIloveItById(userId: string): Observable<IloveIt[] | undefined> {
    return this.http
      .get<IloveIt[]>(this.apiUrlpref)
      .pipe(map((dataArr) => dataArr.filter((data) => data.Iduser == userId)));
  }
  addIloveit(love: IloveIt): Observable<IloveIt> {
    return this.http
      .post<IloveIt>(this.apiUrlpref, love)
      .pipe(tap((love) => this.CityFavorite.next(love)));
  }
  deleteIloveit(loveId: number): Observable<IloveIt[]> {
    return this.http.delete<IloveIt[]>(`${this.apiUrlpref}/${loveId}`);
  }
}
