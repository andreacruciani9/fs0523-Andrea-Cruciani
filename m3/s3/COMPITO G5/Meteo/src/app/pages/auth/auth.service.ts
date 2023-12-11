import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Iregister } from './module/i-registe';
import { iAccessData } from './module/i-access-data.ts';
import { BehaviorSubject, Observable, map, observable, tap } from 'rxjs';
import { Ilogin } from './module/ilogin';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();

  authSubjet = new BehaviorSubject<iAccessData | null>(null);

  user$ = this.authSubjet.asObservable();

  isLoggedIn$ = this.user$.pipe(map((user) => !!user));

  constructor(private http: HttpClient, private router: Router) {
    this.restoreUser();
  }
  registerUrl: string = environment.apiUrl + '/register';
  loginUrl: string = environment.apiUrl + '/login';

  signUp(data: Iregister): Observable<iAccessData> {
    return this.http.post<iAccessData>(this.registerUrl, data);
  }

  login(data: Ilogin): Observable<iAccessData> {
    return this.http.post<iAccessData>(this.loginUrl, data).pipe(
      tap((data) => {
        this.authSubjet.next(data);
        localStorage.setItem('accessData', JSON.stringify(data));
        this.autoLogout(data.accessToken);
      })
    );
  }

  logout() {
    this.authSubjet.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/auth/login']);
  }

  autoLogout(jwt: string) {
    const expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
    const wxpMs = expDate.getTime() - new Date().getTime();
    setTimeout(() => {
      this.logout();
    }, wxpMs);
  }

  restoreUser() {
    const userjson: string | null = localStorage.getItem('accessData');
    if (!userjson) return;
    const accessData: iAccessData = JSON.parse(userjson);
    if (this.jwtHelper.isTokenExpired(accessData.accessToken)) return;
    this.autoLogout(accessData.accessToken);
    this.authSubjet.next(accessData);
  }
}
