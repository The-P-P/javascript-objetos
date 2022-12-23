const dados = require('./client.json')
console.log(dados)
console.log(typeof dados)

const clienteStr = JSON.stringify(dados)

console.log(clienteStr)

console.log(typeof clienteStr)

console.log(clienteStr.nome)

const objetoC = JSON.parse(clienteStr)

console.log(objetoC)