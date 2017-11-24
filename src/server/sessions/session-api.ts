import { rpcMethods } from '../../common/constants'
import { SessionDao, sessionDao } from './session-dao'

export const sessionApiFactory = (sessionDao: SessionDao) => ({
  [rpcMethods.sessions.create]: async ({ params }) => {
    const { publicKey, authTokenId } = params
    const { rows: [session] } = await sessionDao.create(publicKey, authTokenId)
    return session
  },
})

export const sessionApi = sessionApiFactory(sessionDao)
