import { Router } from 'express'
import { userDao, UserDao } from './user-dao'

export const userApiFactory = (userDao: UserDao) => ({
  'getList': ({ params }) => {
    return userDao.select()
  },
  'getOne': ({ params }) => {
    const { id } = params
    return userDao.select({ id }, { limit1 })
  },
})

export const userApi = userApiFactory(userDao)
