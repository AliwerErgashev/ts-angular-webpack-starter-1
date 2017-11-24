import { SessionDao, sessionDao } from './session-dao'

export const sessionApiFactory = (sessionDao: SessionDao) => ({
  'create': async ({ params }) => {
    const { publicKey, authTokenId } = params
    const { rows: [session] } = await sessionDao.create(publicKey, authTokenId)
    return session
  },
})

export const sessionApi = sessionApiFactory(sessionDao)
