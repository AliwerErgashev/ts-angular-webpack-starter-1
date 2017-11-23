import { Router } from 'express'
import { userDao, UserDao } from './user-dao'

export const userApiFactory = (userDao: UserDao) => ({
  'getList': ({ params }) => {
    return userDao.select()
  },
})

export const userApi = userApiFactory(userDao)
