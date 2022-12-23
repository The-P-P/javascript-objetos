const client = {
    nome: 'pedro',
    idade: 21,
    cpf : '12312342341',
    telefone : ['231233122', '123123432'],
    saldo: 200,
    efetuaP : function(valor){
        if (valor > this.saldo ){
            console.log('saldo insuficiente')
        }
        else{
            this.saldo -= valor
            console.log(`pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    }

 };
 client.efetuaP(21);

client.enderecos = [
    {
    rua: 'rua 5',
    numero: '24',
    apartamento:false,
    Complemento: 'quadra 4',

},];

for(let chave in client){
    let tipo = typeof client[chave]
    if( tipo !== 'object' && tipo !== 'function' ){ //filtrando obj
        console.log(`chaves: ${chave} e valores das chaves: ${client[chave]}`)

    }
    
}

const chavesObj = Object.keys(client);

if (!chavesObj.includes('enderecos')){
    console.error('err. necessario um endereco')

}

console.log(chavesObj)


function ligacao(fonefixo, fonepessoal){
    console.log(`ligando para ${fonefixo}`);
    console.log(`ligando para ${fonepessoal}`);
}

ligacao(...client.telefone)

const encomenda = {
    destinatario: client.nome,
    ...client.enderecos[0]

}
console.log(encomenda)