// https://docs.google.com/document/d/1Y6lBvICMN_z3W6S3JzvQ6LsJMTF2p883JvoEGzARx-o/edit
// interface Livro {
//     titulo: string,
//     genero: string | null,
//     autor: string | null
// }

// function cadastrarLivro(): Livro{
//     let livro: Livro = {
//         titulo: prompt("TITULO: ") as string,
//         genero: prompt("GENERO: "),
//         autor: prompt("AUTOR: ") //nao precisa botar o "as string" pq ja foi declaro | null na propiedade
//     }
//     return livro
// }

// let livros:Livro[] = []

// let menu =  prompt("1- Novo Livro 2-Ver Livross 3-Sair")

// while(menu!= "3"){
//     if(menu == "1"){

//         livros.push(cadastrarLivro())

//     }else if(menu == "2"){

//         livros.forEach(livro =>{
//             console.log(livro.titulo)
//         })
        
//     }else if(menu == "3"){
//         break;
//     }

// }

// ------------
// interface Veiculo{
//     modelo:string,
//     ano:number
// }
// function atualizarAnoVeiculo(v:Veiculo, novoAno:number): Veiculo {
//     v.ano = novoAno
//     return v
// }

// let carro:Veiculo = {
//     modelo: "TucTuc",
//     ano: 2010
// }
// let carroAtualizado:Veiculo = atualizarAnoVeiculo(carro, 2008)
// console.log(carroAtualizado.ano)

// ----correção aula 19/06// 1) Crie uma função em TypeScript que receba dois parâmetros, 
// // ambos números, e retorne a soma desses números.

// function soma(n1:number, n2:number) :number {
//     return n1+n2
// }


// // 2) Crie uma função que aceite um parâmetro que pode ser 
// // do tipo string ou number. Se o parâmetro for uma string, 
// // retorne a string concatenada com " - texto". 
// // Se for um número, retorne o dobro desse número.

// function validacao(dado:number | string): number | string{
//     if(typeof dado == "number") return dado * 2

//     else return dado + " - texto"
//     // return typeof dado == "string" ? dado + " - texto" : dado* dado 
// }
// console.log(validacao(8))

// // 4) Crie um array/vetor 'listaFrutas', em seguida, Crie uma função chamada 
// // imprimirFrutas que aceite um array de frutas e imprima cada uma no console

// let listaFrutas:string[] = ["banana", "jabuticaba","melancia","kiwi","pitaia","pomelo"]

// function imprimirFrutas(lista:string[]){
//     lista.forEach(item => {
//         console.log(item)
//     })
// }
// imprimirFrutas(listaFrutas)

// // function mudarItens(lista:string[]):string[]{
// //     lista.forEach(item => item = "a")
// //     return lista
// // }
// // imprimirFrutas(mudarItens(listaFrutas))

// // 6) Crie uma função chamada atualizarAnoVeiculos que aceite um 
// // objeto do tipo Veiculo e um ano como parâmetro. 
// // A função deve retornar um novo veículo com o ano atualizado para o ano 
// //fornecido.
// //dontpad.com/tsts

// interface Veiculo{
//     modelo:string,
//     ano:number
// }
// function atualizarAnoVeiculo(v:Veiculo, novoAno:number): Veiculo {
//     v.ano = novoAno
//     return v
// }

// let carro:Veiculo = {
//     modelo: "TucTuc",
//     ano: 2010
// }
// let carroAtualizado:Veiculo = atualizarAnoVeiculo(carro, 2008)
// console.log(carroAtualizado.ano)

// // 7) Crie uma função chamada verificarUsuario que aceite dois parametro, um do tipo Usuario 
// // e um senhaDeEntrada do tipo string, e verifique se a senha fornecida pelo paremetro
// // é igual a senha do usuario 
// // A função deve retornar um booleano indicando se a senha está correta (true).
// // Atributos usuario -> email:string, senha:string

// interface Usuario {
//     email:string, 
//     senha:string
// }


// function verificarUsuario(user:Usuario,senhaEntrada:String): boolean{
//     if (user.senha == senhaEntrada) return true
//     else return false
// }

// let user1:Usuario = {
//     email: "bibinho@gmail.com",
//     senha: "massaComQueijo"
// }

// console.log(verificarUsuario(user1, "ablublé123") ? "Senha certa":"Senha errada" )

// //Criar uma interface chamada Animal com 4 atributos, crie uma função, 
// //mudarEspecie que receba 2 parametros: animal e novaEspécie, retorne
// //"espécie trocada com sucesso"
// //teste

// interface Animal {
//     nome:string,
//     especie:string,
//     cor:string,
//     idade:number
// }

// function mudarEspecie(animal:Animal, novaEspecie:string) :string{
//     animal.especie = novaEspecie
//     return "Espécie trocada com sucesso!!!"
// }

// let a1:Animal = {
//     nome: "Róger",
//     especie:"Lêmuri",
//     cor:"Lilas",
//     idade:224
// }
// console.log(mudarEspecie(a1,"sapo"))

// //Crie uma função que receba 3 notas de parametro e retorne a media delas.

// function calcularMedia(n1:number, n2:number, n3:number):number{
//     return (n1+n2+n3)/3
// }

// //Criar um programa que permite, atraves de uma função com parametro "raio", 
// //para calcular a area de um circulo
// //para tal use a formula: pi * raio * raio
// //1 função, 1 parametro e um retorno number

// function calcularAreaCirculo(raio:number):number{
//     return Math.PI * Math.pow(raio,2)
// }
// console.log(calcularAreaCirculo(8))

// -------------------correção aula 20/06
// // // fetch("https://viacep.com.br/ws/89010204/json/")
// // // .then(resposta => resposta.json())
// // // .then(dado => {
// // //     document.querySelector(".uf").innerHTML = dado.uf
// // // })

// // //https://jsonplaceholder.typicode.com/users
// // //fazer aparecer o resultado da requisição no console (a lista dos usuarios)

// // fetch("https://jsonplaceholder.typicode.com/users")
// // .then(res => res.json())
// // .then(dados => {
// //     dados.forEach(user => {
// //         console.log(user.name)
// //     });//mostro o nome de todos os usuarios da lista
    
// //     console.log(dados)//ve todos os usuarios em formato JSON
    
// //     console.log(dados[0].name) //ve o nome so de um usuario
// // })


// // fetch("https://jsonplaceholder.typicode.com/users/1")
// // .then(res => res.json())
// // .then(dado => {
// //     console.log(dado)
// // })

// //https://fakestoreapi.com/
// //analisar a API fakestore e:
// //1)Mostrar todos os produtos em um console.log
// // fetch("https://fakestoreapi.com/products")
// // .then(res => res.json())
// // .then(body => console.log(body))

// //2)Mostrar o nome do produto com id 1 em uma tag p
// // fetch("https://fakestoreapi.com/products/1")
// // .then(res => res.json())
// // .then(body => {
// //     document.querySelector(".produto").innerHTML = body.title
// // })
// //Desafio: criar um input que  após o usuario digitar
// //o id do produto mostra seu nome e preço em um alert

// document.querySelector(".buscar")
// .addEventListener("click",()=>{
//     let id = document.querySelector(".id").value
//     fetch(`https://fakestoreapi.com/products/${id}`)
//     .then(res => res.json())
//     .then(body => {
//         alert(`Produto: ${body.title}\nPreço: R$${body.price}`)
//     })
// })
// //https://fakestoreapi.com/
// //Usando a rota "users"
// //Fazer uma tela com html que mostre os seguintes dados do
// //usuario com id 4:
// //-Nome
// //-email
// //-telephone
// //-cidade

// fetch(`https://fakestoreapi.com/users/4`)
//     .then(res => res.json())
//     .then(body => {
//         document.querySelector(".user").innerHTML = (`Nome: ${body.name.firstname}
//         <br>Email: ${body.email}
//         <br>Telefone: ${body.phone}
//         <br>Cidade: ${body.address.city}`)
//     })