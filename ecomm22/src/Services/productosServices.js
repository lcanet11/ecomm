import instance from "../config/axios"

export function getAll(buscar){
   // return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod").then((res) =>res.json());
   return instance.get(`sites/MLA/search?q=${buscar}`)
}

export function getByIdProductos(id){
    return instance.get(`items/${id}`)
}

