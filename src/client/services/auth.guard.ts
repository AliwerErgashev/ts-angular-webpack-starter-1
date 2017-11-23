import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { LoginService } from './login.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (route.data.requiresAuth) {
      this.loginService.redirectToLogin()
      return
    }
    return true
  }
}
