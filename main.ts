import express , {Request , Response} from "express";
import auth from './middleware/auth'
const app:express.Application = express()
app.use(auth)
app.get('/',(req:Request , res : Response)=>{
    res.send("Hello")
})



app.listen(8080,()=>{
    console.log("Server is Started at port 8080")
})