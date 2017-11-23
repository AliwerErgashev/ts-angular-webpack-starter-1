import { SessionDao, sessionDao } from './session-dao'

export const sessionApiFactory = (sessionDao: SessionDao) => ({
  'createSession': ({ params }) => {
    return Promise.resolve({})
  },
})

export const sessionApi = sessionApiFactory(sessionDao)
