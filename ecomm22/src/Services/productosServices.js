export function getAll(){
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod").then((res) =>res.json());
}