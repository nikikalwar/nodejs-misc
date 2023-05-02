const fs = require('fs');

const data = fs.readFileSync("readme.md","utf-8");
console.log(data,"read sync");
console.log("after data");

const data2 = fs.readFile("readme.md","utf-8",(err,data)=>{
    console.log(data,"async data")
})

console.log("before async data")