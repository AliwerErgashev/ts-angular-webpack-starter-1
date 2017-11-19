import * as express from 'express'
import { rpcInfoHandler, rpcProcessHandler } from './rpc'
import './rpc-config'

const app = express()

app.use(express.static('public'))

app.get('/rpc', rpcInfoHandler)
app.post('/rpc', rpcProcessHandler)

app.listen(9000, () => console.info('HTTP server up on port 9000'))
