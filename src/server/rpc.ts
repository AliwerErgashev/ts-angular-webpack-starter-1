import { ok } from 'assert'
import { Request, Response } from 'express'
import { isFunction, isObject, isString } from 'util'
import { userApi } from './users/user-api'
import { parseBodyAsJsonObject } from './utils'

type IMethodHandler = ({ params }) => Promise<any>

interface IMethodDefinition {
  handler: IMethodHandler
  requiresAuth: boolean
}

const methodDefinitionMap = {}

export const registerMethodDefinition = (method: string, definition: IMethodDefinition) => {
  methodDefinitionMap[method] = definition
}

export const registerMethodDefinitionMap = (map, requiresAuth = true) => {
  Object.keys(map).forEach((key) => {
    const value = map[key]
    if (isFunction(value)) {
      return registerMethodDefinition(key, { handler: value, requiresAuth })
    }
    registerMethodDefinition(key, value)
  })
}

export const rpcInfoHandler = async (req: Request, res: Response) => {
  res.send(Object.keys(methodDefinitionMap))
}

export const rpcProcessHandler = async (req: Request, res: Response) => {
  try {
    const body = await parseBodyAsJsonObject(req)
    const { method, params = {} } = body
    ok(isString(method), 'invalid method name')
    const methodDefinition = methodDefinitionMap[method]
    ok(isObject(methodDefinition), 'invalid method definition')
    const { handler, requiresAuth } = methodDefinition
    ok(isFunction(handler), 'invalid method handler')
    const result = await handler({ params })
    res.send(result)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}
