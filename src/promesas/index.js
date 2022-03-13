//Promesas: algo va suceder

const somethingWillHappen =()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('Me resolvi');
        } else {
            reject('No me resolvi');
        }
    });
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingWillHappen2 = ()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('Me resolvi 2');
            },3000)            
        } else {
            const error = new Error('No me resolvi 2')
            reject(error);
        }
    });
}
somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

//correr varias promesas
Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response => console.log('Array de resultados',response))
    .catch(err => console.error(err));