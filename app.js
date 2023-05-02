//example for async await

const test = async() => {
    if(true){
        console.log("Hello world")
    }
}

(async()=>{
    await test();
})();
