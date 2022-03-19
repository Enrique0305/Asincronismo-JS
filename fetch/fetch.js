import fetch from "node-fetch";

//modo 1
// base url
const API = 'https://rickandmortyapi.com/api/character/';

fetch(API)
    .then(response => response.json())
    .then(data => {
        console.log(data.info.count)
        return fetch(`${API}${data.results[0].id}`)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.name);
        return fetch(data.origin.url)
    })
    .then(response => response.json())
    .then(data=>{
        console.log(data.dimension)
    })
    .catch(error =>console.error(error));

        