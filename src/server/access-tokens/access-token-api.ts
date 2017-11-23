import { AccessTokenDao, accessTokenDao } from './access-token-dao'

export const accessTokenApiFactory = (accessTokenDao: AccessTokenDao) => ({
  'createToken': ({ params }) => {
    const { username, password } = params
    return accessTokenDao.createToken(username, password)
  },
})

export const accessTokenApi = accessTokenApiFactory(accessTokenDao)
