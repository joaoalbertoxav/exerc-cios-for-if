//Eu quero que vocês retornem para mim o produto de id 3 com a seguinte frase, "O produto de nome(...) tem o preço de (...)"
let produtos = [
    {
        id:1,
        nome:"Camisa do Flamengo",
        preco :"Nem de graça"
    },
    {
        id:2,
        nome:"Bola",
        preco:"39.00"
    },
    {
        id:3,
        nome:"Raquete",
        preco:"100.00"
    },
    {
        id:4,
        nome:"Tenis",
        preco:"150.00"
    }
]

for (let index = 0; index < produtos.length; index++) {
    if(produtos[index].id === 4) {
    console.log("o produto de nome: ", `${produtos[index].nome}`)
    console.log("tem o valor de: ", `${produtos[index].preco}`)

  }
}


