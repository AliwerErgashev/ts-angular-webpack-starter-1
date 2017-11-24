import { BaseDao } from '../base-dao'
import { pool } from '../pool'

export class SessionDao extends BaseDao {
  constructor(pool) {
    super(pool, 'sessions')
  }

  create(publicKey, authTokenId) {
    return this.insert({
      publicKey,
      authTokenId,
    })
  }
}

export const sessionDao = new SessionDao(pool)
