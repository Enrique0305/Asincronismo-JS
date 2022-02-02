const fetchData = require('../utils/fetchData');
const API = 'https://api.opendota.com/api/';

fetchData(API)
    .then(data =>{
        console.log(data.info.description);
        return fetchData(API+'heroes')
    })
    .then(data =>{
        console.log(data[0].localized_name);
        console.log(data[0].roles);
    })
    .then(err => console.error(err));