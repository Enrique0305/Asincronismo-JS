//Funcion para darle vida a las llamadas de mi api
let XMLHttprequest = require('xmlhttprequest').XMLHttpRequest;

let API='https://api.opendota.com/api/';

function fetchData(url_api,callback){
    let xhttp = new XMLHttprequest();
    xhttp.open('GET',url_api,true);
    xhttp.onreadystatechange =function(event){
        if(xhttp.readyState ===4){
            if(xhttp.status===200){
               callback(null,JSON.parse(xhttp.responseText)); 
            } else{
                const error = new Error('Error'+ url_api);
                return callback(error,null);
            }
        }
    }
    xhttp.send();
}

fetchData(API,function(error1,data1){
    if (error1) return console.error(error1);
    fetchData(API+'heroes',function(error2,data2){
        if(error2) return console.error(error2);
        console.log(data1.info.description);
        console.log(data2[0].localized_name);
        console.log(data2[0].roles);
    });
});