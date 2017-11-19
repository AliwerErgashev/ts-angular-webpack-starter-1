import { prefixKeys } from '../common/utils'
import { registerMethodDefinitionMap } from './rpc'
import { userApi } from './users/user-api'

registerMethodDefinitionMap({
  ...prefixKeys(userApi, 'users')
})
