import { rpcMethods } from '../../common/constants'
import { ICCipherKey } from '../../libs/icjs/ICCipherKey'
import { SessionDao, sessionDao } from './session-dao'

export const sessionApiFactory = (sessionDao: SessionDao) => ({
  [rpcMethods.sessions.create]: async ({ params }) => {
    const { publicKey } = params
    const cipherKey = new ICCipherKey()
    const dh = ICCipherKey.dh(cipherKey.getPrivateKey().toHex(), publicKey).toHex()
    console.log(dh)
    const { rows: [session] } = await sessionDao.insert({ dh })
    return {
      id: session.id,
      publicKey: cipherKey.getPublicKey().toHex(),
    }
  },
})

export const sessionApi = sessionApiFactory(sessionDao)
