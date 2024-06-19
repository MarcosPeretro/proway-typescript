"use strict";
let car = {
    Marca: "Fiat",
    Cor: "preto",
    Ano: 2004,
};
function mostrarCarro(car) {
    console.log(`Marca : ${car.Marca}`);
    console.log(`Cor : ${car.Cor}`);
    console.log(`Ano : ${car.Ano}`);
    console.log(`Preço : ${car.Preco ? car.Preco : "Não possui"}`);
    console.log(`Material Interno : ${car.MaterialInterno ? car.MaterialInterno : "Não possui"}`);
}
mostrarCarro(car);
