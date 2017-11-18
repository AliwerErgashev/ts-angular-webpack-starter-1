import * as express from 'express'
import { rpcInfoHandler, rpcProcessHandler } from './rpc'
import './rpc-config'

const app = express()

app.use(express.static('public'))

app.get('/rpc', rpcInfoHandler)
app.post('/rpc', rpcProcessHandler)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(9000, () => console.log('HTTP server up on port 9000'))
