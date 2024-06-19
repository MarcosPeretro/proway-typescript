//Type union
let cpf: string | number

type Aluno = {
    nome: string,
    idade: number,
    email?: string 
}

let aluno: Aluno = {
    nome: "pedro",
    idade: 12
}

interface Professor {
    nome:string,
    idade:number,
    disciplina:string
}

let prof: Professor = {
    nome: "Orácio Covarde",
    idade: 87,
    disciplina: "Historia"
}

function mostrarProfessor(professor:Professor){
    console.log(`Nome : ${professor.nome}`)
    console.log(`Idade : ${professor.idade}`)
    console.log(`Disciplina: ${professor.disciplina ? professor.disciplina : "Não possui"}`)
}