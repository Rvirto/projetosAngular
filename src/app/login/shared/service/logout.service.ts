import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class LogoutService {

  private logoutURL = 'http://localhost:8080/logout/removerToken';

  constructor(
    private http: AuthHttp,
    private loginService: LoginService
  ) { }

  public logout() {
    return this.http.delete(`${this.logoutURL}`, {withCredentials: true})
    .toPromise()
    .then(() => {
      this.loginService.limparAccesToken();
    });
  }
}
