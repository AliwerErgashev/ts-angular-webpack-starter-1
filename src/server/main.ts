import * as express from 'express'
import { rpc } from './rpc'

const app = express()

app.use(express.static('public'))

app.post('/rpc', rpc)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(9000, () => console.log('HTTP server up on port 9000'))
