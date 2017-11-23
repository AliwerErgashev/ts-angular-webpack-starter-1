import { BaseDao } from '../base-dao'
import { pool } from '../pool'

export class SessionDao extends BaseDao {
  constructor(pool) {
    super(pool, 'sessions')
  }
}

export const sessionDao = new SessionDao(pool)
