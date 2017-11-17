import { Router } from 'express'
import { userDao, UserDao } from './user-dao'

const userApiFactory = (userDao: UserDao) => ({
  'getList': ({ params }) => userDao.select(),
})

export const userApi = userApiFactory(userDao)
