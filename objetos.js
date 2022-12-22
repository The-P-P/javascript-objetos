const client = {
    nome:'pedro',
    idade:21,
    cpf:'1231231312414',
    telefone:'234 42342 42342'

}

console.log(client.nome)

console.log(`os 3 primeiros numeros do telefone eh ${client.telefone.substring(0,3)}`)

console.log(client['idade'])

const chaves = ['nome', 'idade', 'cpf', 'telefone'];

chaves.forEach((chaves) => {
    console.log(`a chave ${chaves} tem valor ${client[chaves]}`)
})

console.log(client.nome);

console.log(client.cep);

client.cep = '64353-434'

console.log(client.cep)

client.name = 'pedro amorim'

console.log(client)

