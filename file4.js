const { Buffer } = require('node:buffer')

const buff = Buffer.from('Samuels', 'utf8')

console.log(buff.toString('hex'))
