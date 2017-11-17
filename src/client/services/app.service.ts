import { HttpClient } from '@angular/common/http/src/client'
import { Injectable } from '@angular/core'

@Injectable()
export class AppService {
  constructor(
    private http: HttpClient,
  ) { }
}
