import { Costumer, Produto } from "./objetos";
import { addProduto } from "./apiClient";
import { getProdutos, getProdutosById, getUserById, getUsers } from "./apiClient";

// let novoProduto: Produto = {
//     id: "1",
//     nome: "Gaita de fole da invisibilidade",
//     preco: 198.60
// }

function carregarListaProdutos(produto:Produto){
    let listaProdutos: HTMLUListElement = document.querySelector(".lista-produtos") as HTMLUListElement
const card = document.createElement(`<li>
                <div class="card">
                    <img src="${produto.image}" alt="">
                    <div class="dados">
                        <h2 class="title">${produto.title}^</h2>
                        <h3 class="price">${produto.price}</h3>
                    </div>
                    <p class="description">${produto.description}</p>
                </div>
            </li>`)
            listaProdutos.appendChild(card)
}

let novoProduto:Produto = {
    id:"1",
    title:"Gaita de fole da invisibilidade",
    price: 190,
    description: "Enquanto voce tocar ela voce fica invulneravel",
    category: "Lendario",
    image:"https://google.com/image.jpg",
    rating:{
        rate:5,
        count:1
    }
}
let novoCostumer: Costumer = {
    id:"",
    name:"Sylvana",
    age: 32
}

async function main(){
    let produtos = await getProdutos()
    produtos.forEach(produto => {
        carregarListaProdutos(produto)
    })

    let produto = await getProdutosById(1)
    // console.log(await addProduto(novoProduto))
}
main()