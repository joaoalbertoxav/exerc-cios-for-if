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




//Quero quem me retornem os alunos que passaram por média, tomem consideração que 7 é o valor para se passar por media. Quero que me retornem a seguinte frase
//O aluno ... de matricula ...

let aluno = [
    {
        id:1,
        nome:"Josefina",
        matricula :435243,
        notaFinal:6
    },
    {
        id:2,
        nome:"Carlos",
        matricula :455243,
        notaFinal:3
    },
    {
        id:3,
        nome:"Joao",
        matricula :54313,
        notaFinal:2
    },
    {
        id:4,
        nome:"Carlota",
        matricula :9124810,
        notaFinal:10
    },
    {
        id:5,
        nome:"Giusseppe",
        matricula :75635,
        notaFinal:8
    },
    {
        id:6,
        nome:"Joaquina",
        matricula :231423,
        notaFinal:4
    },
    {
        id:7,
        nome:"Marquim",
        matricula :35253,
        notaFinal:9
    },
]
 for (let index = 0; index < aluno.length; index++) {
    if(aluno[index]. notaFinal >= 7) {
        console.log("o aluno", `${aluno[index].nome}`)
        console.log("de matricula", `${aluno[index].matricula}`)
        console.log ("passou direto")
    }
    
    else (aluno[index]. notaFinal < 7) 
    console.log("o aluno", `${aluno[index].nome}`)
        console.log("de matricula", `${aluno[index].matricula}`)
        console.log(" não passou, vai ter que fazer o pix")
 }


