const fetchData = require('../utils/fetchData');
const API = 'https://api.opendota.com/api/';

const anotherFunction = async(url_api)=>{
    try{
        const data = await fetchData(url_api);
        const heroe = await fetchData(url_api+'heroes');

        console.log(data.info.description);
        console.log(heroe[0].localized_name);
        console.log(heroe[0].roles);

    }catch(error){
        console.error(error);
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');
