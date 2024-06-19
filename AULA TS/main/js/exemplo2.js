"use strict";
function cadastrarLivro() {
    let livro = {
        titulo: prompt("TITULO: "),
        genero: prompt("GENERO: "),
        autor: prompt("AUTOR: ") //nao precisa botar o "as string" pq ja foi declaro | null na propiedade
    };
    return livro;
}
let livros = [];
let menu = prompt("1- Novo Livro 2-Ver Livross 3-Sair");
while (menu != "3") {
    if (menu == "1") {
        livros.push(cadastrarLivro());
    }
    else if (menu == "2") {
        livros.forEach(livro => {
            console.log(livro.titulo);
        });
    }
    else if (menu == "3") {
        break;
    }
}
