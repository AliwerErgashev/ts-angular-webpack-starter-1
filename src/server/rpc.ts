import { ok } from 'assert'
import { Request, Response } from 'express'
import { isFunction, isObject, isString } from 'util'
import { userApi } from './users/user-api'
import { parseBodyAsJsonObject } from './utils'

type IMethodHandler = ({ params }) => Promise<any>

interface IMethodDefinition {
  handler: IMethodHandler,
  requiresAuth: boolean
}

const methodDefinitionMap = new Map<string, IMethodDefinition>()

export const registerMethodDefinition = (method: string, definition: IMethodDefinition) => {
  methodDefinitionMap.set(method, definition)
}

export const registerMethodHandler = (method: string, handler: IMethodHandler) => {
  registerMethodDefinition(method, { handler, requiresAuth: true })
}

export const rpcHandler = async (req: Request, res: Response, next) => {
  try {
    const body = await parseBodyAsJsonObject(req)
    const { method, params = {} } = body
    ok(isString(method), 'invalid method name')
    const methodDefinition = methodDefinitionMap.get(method)
    ok(isObject(methodDefinition), 'invalid method definition')
    const { handler, requiresAuth } = methodDefinition
    ok(isFunction(handler), 'invalid method handler')
    const result = await handler({ params })
    res.send(result)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}
