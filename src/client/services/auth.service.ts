import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {
  private _authenticated = false

  constructor(
    private router: Router,
  ) { }

  get authenticated() {
    return this._authenticated
  }

  redirectToLogin() {
    this.router.navigate(['/login'])
  }
}
