"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let produto
// async function buscarProduos() {
//     produto = await axios.get("https://fakestoreapi.com/products/1")
//     console.log(produto.data.price)
// } 
// buscarProduos()
// axios.get("https://jsonplaceholder.typicode.com/users")
// .then(resposta => console.log(resposta.data[4].address.geo.lat))
// interface Post {
//     userId: number,
//     id: number,
//     title: string,
//     body: string
// }
// let posts: Post[] = []
// axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
// .then(itens =>{
//     posts = itens.data as Post[]
// })
//  console.log(posts)
// interface User {
//     id: number,
//     name: string,
//     email: string
// }
// const getUsuarios = async (): Promise<User[]> => {
//     let usuarios = await axios.get("http://localhost:3000/user")
//     return usuarios.data
// }
// async function mostrarUsuario() {
//     let usuarios:User[] = await getUsuarios()
//     console.log(usuarios)
// }
// mostrarUsuario()
// interface Animal{
//     id:number,
//     nome:string,
//     especie:string
// }
// async function getAnimais(): Promise<Animal[]> {
//     let animais = await axios.get("http://localhost:3000/Animal")
//     return animais.data
// }
// async function mostrarAnimais() {
//     console.log(await getAnimais())
// }
// interface SuperHeroi{
//     id:number,
//     nome:string,
//     poder:string,
//     cidade:string,
//     vivo:boolean
// }
// async function getSuperHeroi(): Promise<SuperHeroi[]> {
//     let SuperHeroi = await axios.get("http://localhost:3000/superHeroi")
//     return SuperHeroi.data
// }
// async function getSuperHeroiById(id:number): Promise<SuperHeroi> {
//     let SuperHeroi = await axios.get(`http://localhost:3000/superHeroi/${id}`)
//     return SuperHeroi.data
// }
// async function mostrarHeroi(id:number){
//     console.log(await getSuperHeroiById(id))
// }
// mostrarHeroi(2)
// let novoSuperHeroi:SuperHeroi = {
//     id:5,
//     nome:"C#çador",
//     poder:"Caçar erros e te julgar e.e",
//     cidade:"Assembletown",
//     vivo:true
// }
// function addSuperHeroi(superHeroi:SuperHeroi){
//     axios.post("http://localhost:3000/superHeroi", superHeroi).then(data => {
//         console.log("Super heroi Adicionado com sucesso")
//     })
// }
// addSuperHeroi(novoSuperHeroi)
