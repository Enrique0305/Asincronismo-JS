const dosomethingAsync = ()=>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=>resolve('Do Something Async'),5000)
        : reject(new Error ('Test Error'))
    });
}

const dosomething = async()=>{
    const something = await dosomethingAsync();
    console.log(something);
}

console.log('Before');
dosomething();
console.log('After');

const anotherFunction = async()=>{
    try {
        const something = await dosomethingAsync();
        console.log(something);
    } catch(error){
        console.error(error)
    }
}

console.log('Before 2');
anotherFunction();
console.log('After 2');
