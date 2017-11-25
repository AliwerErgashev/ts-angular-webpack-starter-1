import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { rpcMethods } from '../../common/constants'
import { ICCipher } from '../../libs/icjs/ICCipher'
import { ICCipherKey } from '../../libs/icjs/ICCipherKey'

@Injectable()
export class RpcService {
  private sessionId
  private dh

  constructor(
    private http: HttpClient,
  ) {
    this.createSession()
  }

  async createSession() {
    const cipherKey = new ICCipherKey()
    const { id, publicKey } = await this.request(rpcMethods.sessions.create, {
      publicKey: cipherKey.getPublicKey().toHex(),
    })
    this.sessionId = id
    this.dh = ICCipherKey.dh(cipherKey.getPrivateKey().toHex(), publicKey)
    console.log(this.dh.toHex())
  }

  async request(method: string, params: any = {}) {
    return this.http.post<any>('rpc', { method, params }).toPromise()
  }
}
