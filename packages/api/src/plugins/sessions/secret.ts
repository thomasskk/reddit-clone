import sodium from 'sodium-native'

const main = async () => {
  for (let i = 0; i < 10; i++) {
    const buffer = Buffer.allocUnsafe(sodium.crypto_secretbox_KEYBYTES)
    sodium.randombytes_buf(buffer)
    console.dir(buffer.toString('base64'))
  }
}

main()
