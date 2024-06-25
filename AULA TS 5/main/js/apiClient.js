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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.getProdutos = exports.addCostumer = void 0;
exports.getProdutosById = getProdutosById;
exports.addProduto = addProduto;
exports.getUserById = getUserById;
const axios_1 = __importDefault(require("axios"));
const uuid_1 = require("uuid");
const addCostumer = (constumer) => __awaiter(void 0, void 0, void 0, function* () {
    constumer.id = (0, uuid_1.v4)();
    yield axios_1.default.post("http://localhost:3000/costume");
});
exports.addCostumer = addCostumer;
const getProdutos = () => __awaiter(void 0, void 0, void 0, function* () {
    let produtos = yield axios_1.default.get("https://fakestoreapi.com/products");
    return produtos.data;
});
exports.getProdutos = getProdutos;
function getProdutosById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let produto = yield axios_1.default.get(`http://fakestoreapi.com/products/${id}`);
        return produto.data;
    });
}
function addProduto(produto) {
    return __awaiter(this, void 0, void 0, function* () {
        axios_1.default.post("http://localhost:3000/produto", produto);
        return `Produto: ${produto.title}, cadastrado com sucesso!`;
    });
}
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    let users = yield axios_1.default.get("https://fakestoreapi.com/users");
    return users.data;
});
exports.getUsers = getUsers;
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = yield axios_1.default.get(`https://fakestoreapi.com/users/${id}`);
        return user.data;
    });
}
