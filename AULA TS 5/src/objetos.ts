export interface Costumer{
    id:string,
    name:string,
    age:number
}




export interface Produto{
    id:string,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:{
        rate:number,
        count:number
    }
}   
export interface User{
    "address": {
        "geolocation": {
          "lat": string,
          "long": string
        },
        "city": string,
        "street": string,
        "number": number,
        "zipcode": string
      },
      "id": number,
      "email": string,
      "username": string,
      "password": string,
      "name": {
        "firstname": string,
        "lastname": string
      },
      "phone": string,
      "__v": number
    }  


