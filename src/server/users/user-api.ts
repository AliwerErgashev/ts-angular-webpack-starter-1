import { Router } from 'express'
import { userDao, UserDao } from './user-dao'

export const userApiFactory = (userDao: UserDao) => ({
  'getList': async () => {
    return userDao.select()
  },
  'getOne': async ({ params }) => {
    const { id } = params
    return userDao.select({ id }, { limit: 1 })
  },
})

export const userApi = userApiFactory(userDao)
