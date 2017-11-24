import { Router } from 'express'
import { userDao, UserDao } from './user-dao'

export const userApiFactory = (userDao: UserDao) => ({
  'getList': async () => {
    const { rows } = await userDao.select()
    return rows
  },
  'getOne': async ({ params }) => {
    const { id } = params
    const { rows: [user] } = await userDao.select({ id }, { limit: 1 })
    return user
  },
})

export const userApi = userApiFactory(userDao)
