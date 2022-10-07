import instance from "../config/axios"

export function getAll(){
   // return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod").then((res) =>res.json());
   return instance.get("sites/MLA/search?q=ipod")
}

export function createProductos(){
    
}

