"use strict";
// let n1:number = 4;
// let n2:number = 2;
// function Somar(n1:number, n2:number): number {
//     return n1+n2;
// }
// console.log(Somar(n1, n2))
// let a: number | string = 4;
// function check(parametro1:number | string){
//     if (typeof parametro1 == "number") {
//         console.log(parametro1 * 2)
//     }
//     else if (typeof parametro1 == "string"){
//         parametro1 += " - texto"
//         console.log(parametro1)
//     }
//     else{
//         console.log("Indefinido")
//     }
// }
// check(a)
// let listaFrutas:string[] = ["Maça", "Banana", "Uva",];
// function imprimirFrutas(){
//     for (let i = 0; i < listaFrutas.length; i++) {
//         let mostrar = listaFrutas[i];
//         console.log(mostrar)
//     }
// }
// imprimirFrutas();
//*CORREÇÃO COM FOREACH*
// let listaFrutas:string[] = ["banana", "jabuticaba","Uva"]
//     function imprimirFrutas(lista:string[]) {
//         lista.forEach(item => console.log(item))
//     }
//     imprimirFrutas(listaFrutas)
// *CORREÇÂO*
// interface Veiculo{
//     Marca:string,
//     Ano:number
// }
// function atualizarAnoVeiculos(v:Veiculo, AnoNovo:number): Veiculo {
//     v.Ano = AnoNovo 
//     return v;
// }
// let carro:Veiculo ={
//     Marca: "tuctuc",
//     Ano: 2010
// }
// let carroAtualizado:Veiculo = atualizarAnoVeiculos(carro, 2008)
// console.log(carroAtualizado.Ano)
// interface Usuario{
//     User: string,
//     Senha: string
// }
// let login: Usuario = {
//     User: "molejo",
//     Senha: "pizza"
// }
// function verificarUsuario(u:Usuario, senhaDeEntrada:string):boolean {
//     if (u.Senha == senhaDeEntrada ) {
//         return true;
//     } 
//     else{
//         return false;
//     }    
// }
// console.log(verificarUsuario(login,"pizza") == true ? "bem vindo" + " " + login.User : "Sua senha está incorreta")
// interface Animal{
//     Nome:string,
//     Especie:string,
//     Cor:string,
//     Habitat:string,
// }
// function mudarEspecie(a:Animal, NovaEspecie:string):string {
//     a.Especie = NovaEspecie
//     return "espécie trocada com sucesso para : " + a.Especie;
// }
// let i: Animal = {
//     Nome:"Astral",
//     Especie: "laranja",
//     Cor: "branco",
//     Habitat: "domestico"
// }
// console.log(mudarEspecie(i,"rosa"))
// function Media(n1:number, n2:number, n3:number): number {
//     let Media = (n1 + n2 + n3) / 3
//     return Media;
//     }
// console.log(Media(4,4,4));
//Criar um programa que permite, atraves de uma função com parametro "raio", 
//para calcular a area de um circulo
//para tal use a formula: pi * raio * raio
//1 função, 1 parametro e um retorno number
// *ATIVIDADE FEITA NO PAPEL*
// function calcularAreaCirculo(raio:number):number{
//     return Math.PI * Math.pow(raio,2);
// }
// console.log(calcularAreaCirculo(3));
