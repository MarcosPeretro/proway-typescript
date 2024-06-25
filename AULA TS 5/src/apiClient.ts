import axios from "axios"
import {v4 as uuidv4} from 'uuid'
import { Costumer, Produto, User } from "./objetos"

export const addCostumer = async(constumer:Costumer):Promise<String> =>{
    constumer.id = uuidv4()
    await axios.post("http://localhost:3000/costume")
}

export const getProdutos = async ():Promise<Produto[]> => {
    let produtos = await axios.get("https://fakestoreapi.com/products")
    return produtos.data
}

export async function getProdutosById(id:number) : Promise<Produto>{
    let produto = await axios.get(`http://fakestoreapi.com/products/${id}`)
    return produto.data;
}
export async function addProduto(produto:Produto):Promise<String>{
    axios.post("http://localhost:3000/produto", produto)
    return `Produto: ${produto.title}, cadastrado com sucesso!`
}
export const getUsers = async ():Promise<User> => {
    let users = await axios.get("https://fakestoreapi.com/users")
    return users.data
}

export async function getUserById(id:number) : Promise<User>{
    let user = await axios.get(`https://fakestoreapi.com/users/${id}`)
    return user.data;
}
