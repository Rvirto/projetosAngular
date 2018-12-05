import { LoginService } from './shared/service/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (next.data.roles &&  !this.loginService.temQualquerPermissao(next.data.roles)) {
        return false;
      }
      if (!this.loginService.taLogado) {
        this.router.navigate(['/']);
        return false;
      }
    return true;
  }
}
