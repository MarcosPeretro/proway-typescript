"use strict";
let idade = 1;
if (typeof idade == "number") {
    console.log("é um número");
}
else {
    console.log("não é um número");
}
let l1 = {
    titulo: "senhor dos aneis",
};
let novaSerie = {
    titulo: "breaking bad",
    qtdEpisodios: 100,
    autor: {
        nome: "Vince Giligan",
        isVivo: true
    }
};
console.log(typeof novaSerie.autor.nome);
