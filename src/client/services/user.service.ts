import { Injectable } from '@angular/core'
import { RpcService } from './rpc.service'

@Injectable()
export class UserService {
  private _users: any[]

  constructor(
    private rpcService: RpcService
  ) { }

  get users() {
    return this._users
  }

  async getList() {
    this._users = await this.rpcService.request<any[]>('users.getList', {})
  }
}
