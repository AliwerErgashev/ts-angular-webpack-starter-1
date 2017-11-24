import { sql } from 'mongo-sql'
import { Pool } from 'pg'
import { preInsertCheck } from './utils'

export class BaseDao {
  constructor(
    protected pool: Pool,
    protected table: string,
  ) { }

  protected async runSqlQuery(queryText: string, values?: any[]) {
    return this.pool.query(queryText, values)
  }

  protected async runMongoSqlQuery(mongoSqlQuery) {
    const { query, values } = sql(mongoSqlQuery)
    return this.runSqlQuery(query, values)
  }

  private selectQuery(where, options) {
    const { limit, offset } = options
    return {
      type: 'select',
      table: this.table,
      where,
      limit,
      offset,
    }
  }

  public async select(where = {}, options = {}) {
    const result = await this.runMongoSqlQuery(this.selectQuery(where, options))
    return result.rows
  }

  private insertQuery(values, options) {
    const { returning = ['*'] } = options
    return {
      type: 'insert',
      table: this.table,
      values,
      returning,
    }
  }

  public async insert(values, options = {}) {
    preInsertCheck(values)
    return this.runMongoSqlQuery(this.insertQuery(values, options))
  }

  private updateQuery(where, values, options) {
    const { returning = ['*'] } = options
    return {
      type: 'update',
      table: this.table,
      values,
      where,
      returning,
    }
  }

  public async update(where, values, options = {}) {
    return this.runMongoSqlQuery(this.updateQuery(where, values, options))
  }

  private deleteQuery(where, options) {
    const { returning = ['*'] } = options
    return {
      type: 'delete',
      table: this.table,
      where,
      returning,
    }
  }

  public async delete(where, options) {
    return this.runMongoSqlQuery(this.deleteQuery(where, options))
  }
}
