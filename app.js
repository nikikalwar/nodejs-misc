//post api
const express = require ("express")
const app = express();

app.post('/',(req,res)=>{
    res.send("received post request");
    res.end()
})

app.listen(3000,()=>{
    console.log("port is running at",3000)
})


