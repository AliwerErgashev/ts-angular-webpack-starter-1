import { BaseDao } from '../base-dao'
import { pool } from '../pool'

export class AccessTokenDao extends BaseDao {
  constructor(pool) {
    super(pool, 'accessTokens')
  }

  async createToken(username, password) {
    return Promise.resolve({})
  }
}

export const accessTokenDao = new AccessTokenDao(pool)
