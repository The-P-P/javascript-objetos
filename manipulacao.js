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

client.enderecos.push({
    rua: 'rua 10',
    numero: 66,
    apartamento:true,
});

const listAp = client.enderecos.filter(
    (enderecos) => enderecos.apartamento === true
)

console.log(listAp)

console.log(client.telefone)


console.log(client.enderecos.apartamento)


