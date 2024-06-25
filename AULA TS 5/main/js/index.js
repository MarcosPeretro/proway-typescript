"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiClient_1 = require("./apiClient");
// let novoProduto: Produto = {
//     id: "1",
//     nome: "Gaita de fole da invisibilidade",
//     preco: 198.60
// }
function carregarListaProdutos(produto) {
    let listaProdutos = document.querySelector(".lista-produtos");
    const card = document.createElement(`<li>
                <div class="card">
                    <img src="${produto.image}" alt="">
                    <div class="dados">
                        <h2 class="title">${produto.title}^</h2>
                        <h3 class="price">${produto.price}</h3>
                    </div>
                    <p class="description">${produto.description}</p>
                </div>
            </li>`);
    listaProdutos.appendChild(card);
}
let novoProduto = {
    id: "1",
    title: "Gaita de fole da invisibilidade",
    price: 190,
    description: "Enquanto voce tocar ela voce fica invulneravel",
    category: "Lendario",
    image: "https://google.com/image.jpg",
    rating: {
        rate: 5,
        count: 1
    }
};
let novoCostumer = {
    id: "",
    name: "Sylvana",
    age: 32
};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let produtos = yield (0, apiClient_1.getProdutos)();
        produtos.forEach(produto => {
            carregarListaProdutos(produto);
        });
        let produto = yield (0, apiClient_1.getProdutosById)(1);
        // console.log(await addProduto(novoProduto))
    });
}
main();
