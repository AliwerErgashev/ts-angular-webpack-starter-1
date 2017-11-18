import { prefixKeys } from '../common/utils'
import { registerMethodDefinitionMap } from './rpc'
import { userApi } from './users/user-api'

const map = {
  ...prefixKeys(userApi, 'users')
}

console.log(map)

registerMethodDefinitionMap(map)
