import { rpcMethods } from '../../common/constants'
import { AccessTokenDao, accessTokenDao } from './access-token-dao'

export const accessTokenApiFactory = (accessTokenDao: AccessTokenDao) => ({
  [rpcMethods.authTokens.create]: async ({ params }) => {
    const { username, password } = params
    const { rows: [accessToken] } = await accessTokenDao.create(username, password)
    return accessToken
  },
})

export const accessTokenApi = accessTokenApiFactory(accessTokenDao)
