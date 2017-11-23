import { server } from './server'

server.listen(9000, () => {
  console.info('HTTP server up on port 9000')
})
