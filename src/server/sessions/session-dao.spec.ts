import { Pool } from 'pg'
import { SessionDao } from './session-dao'

describe('SessionDao', () => {
  let sessionDao: SessionDao

  beforeEach(() => {
    sessionDao = new SessionDao({} as Pool)
  })

  test('create()', () => {
    expect(true).toBe(true)
  })
})
