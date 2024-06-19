interface Carro {
    Marca:string,
    Cor:string,
    Ano:number,
    Preco?:number,
    MaterialInterno?:string,
    legal?:string
}
let car: Carro = {
    Marca: "Fiat",
    Cor: "preto",
    Ano: 2004, 
}


function mostrarCarro(car: Carro){
console.log(`Marca : ${car.Marca}`)
console.log(`Cor : ${car.Cor}`)
console.log(`Ano : ${car.Ano}`)
console.log(`Preço : ${car.Preco ? car.Preco : "Não possui"}`)
console.log(`Material Interno : ${car.MaterialInterno ? car.MaterialInterno : "Não possui"}`)
}
mostrarCarro(car)

