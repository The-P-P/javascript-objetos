const clientes =  require('./cliente.json')

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor))
}

const encontrado =  encontrar(clientes, 'nome', 'Carolina')

console.log(encontrado)

const encontrado2 = encontrar(clientes, 'telefone', '9291767581')

console.log(encontrado2)

function filterap(clientes){
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty('complemento'))

    } )
}

const filtrados = filterap(clientes);

console.log(filtrados)


function ordenar(lista, propriedade){
    const resultado = lista.sort((a,b) => {
        if (a[propriedade] < b[propriedade]){
            return -1
        }
        if (a[propriedade] > b[propriedade]){
            return 1
        }
        return 0 

    })
    return resultado
}

const ordenarN = ordenar(clientes, 'nome')

console.log(ordenarN)