let carro = {nome: 'Onix',
modelo: 'Plus',
marca: 'Chevrolet',
velocidade: 90,
acelerar(r=0){
    console.log('Acelerou')
    this.velocidade += r
}}

carro.acelerar(2)
console.log (`${carro.nome} acelerou ${carro.velocidade}KM/H`) 