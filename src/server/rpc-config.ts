import { prefixKeys } from '../common/utils'
import { accessTokenApi } from './access-tokens/access-token-api'
import { registerMethodDefinitionMap } from './rpc'
import { sessionApi } from './sessions/session-api'
import { userApi } from './users/user-api'

registerMethodDefinitionMap({
  ...prefixKeys(accessTokenApi, 'accessTokens'),
  ...prefixKeys(sessionApi, 'sessions'),
  ...prefixKeys(userApi, 'users'),
})
