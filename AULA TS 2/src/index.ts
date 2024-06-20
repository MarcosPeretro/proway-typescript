let idade:number | string | boolean = 1

if (typeof idade == "number") {
    console.log("é um número")
}
else{
    console.log("não é um número")
}

interface livro{
    titulo:string,
    genero?:string
}
let l1:livro = {
    titulo: "senhor dos aneis",
}

interface Autor{
    nome:string,
    isVivo:boolean
}
interface Serie{
    titulo:string,
    qtdEpisodios:number,
    autor: Autor
}

let novaSerie: Serie = {
    titulo: "breaking bad",
    qtdEpisodios: 100,
    autor: {
        nome:"Vince Giligan",
        isVivo: true
    }
}

console.log(typeof novaSerie.autor.nome)