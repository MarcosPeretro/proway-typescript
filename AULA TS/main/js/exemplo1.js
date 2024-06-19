"use strict";
//Type union
let cpf;
let aluno = {
    nome: "pedro",
    idade: 12
};
let prof = {
    nome: "Orácio Covarde",
    idade: 87,
    disciplina: "Historia"
};
function mostrarProfessor(professor) {
    console.log(`Nome : ${professor.nome}`);
    console.log(`Idade : ${professor.idade}`);
    console.log(`Disciplina: ${professor.disciplina ? professor.disciplina : "Não possui"}`);
}
