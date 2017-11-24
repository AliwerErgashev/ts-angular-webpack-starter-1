import { ok } from 'assert'
import { Pool } from 'pg'
import { BaseDao } from '../base-dao'
import { pool } from '../pool'
import { UserDao, userDao } from '../users/user-dao'

export class AccessTokenDao extends BaseDao {
  constructor(
    pool: Pool,
    private userDao: UserDao,
  ) {
    super(pool, 'accessTokens')
  }

  async create(username, password) {
    const [user] = await userDao.select({ username, password })
    ok(user, 'invalid__user')
    return this.insert({
      userId: user.id,
    })
  }
}

export const accessTokenDao = new AccessTokenDao(pool, userDao)
