import { ICCipherKey } from '../ICCipherKey'

const cipherKey = new ICCipherKey()

describe('ICCipherKey', () => {
  test('length', () => {
    const privateKey = cipherKey.getPrivateKey()
    const publicKey = cipherKey.getPublicKey()
    expect(privateKey.toHex()).toHaveLength(64)
    expect(publicKey.toHex()).toHaveLength(64)
  })
})
