import { ok } from 'assert'
import { Request, Response } from 'express'
import { isString } from 'util'
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

export const rpc = async (req: Request, res: Response) => {
  const body = await parseBodyAsJsonObject(req)
  const { method, params = {} } = body
  ok(isString(method), 'method is not provided')
  const { handler, requiresAuth } = methodDefinitionMap.get(method)
  handler({ params })
    .then(result => res.send(result))
    .catch(error => res.status(500).send(error))
}
