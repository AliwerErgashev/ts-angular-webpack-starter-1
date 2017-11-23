import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class RpcService {
  constructor(
    private http: HttpClient,
  ) { }

  async request<T>(method: string, params: any): Promise<T> {
    return this.http.post<T>('rpc', { method, params }).toPromise()
  }
}
