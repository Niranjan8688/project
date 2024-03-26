import express , {Request , Response} from "express";
const app:express.Application = express()

app.get('/',(req:Request , res : Response)=>{
    res.send("Hello")
})


app.listen(8080,()=>{
    console.log("Server is Started at port 8080")
})