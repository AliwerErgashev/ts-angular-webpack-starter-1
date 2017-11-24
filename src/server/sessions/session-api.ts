import { SessionDao, sessionDao } from './session-dao'

export const sessionApiFactory = (sessionDao: SessionDao) => ({
  'create': async ({ params }) => {
    const { publicKey, authTokenId } = params
    return sessionDao.create(publicKey, authTokenId)
  },
})

export const sessionApi = sessionApiFactory(sessionDao)
