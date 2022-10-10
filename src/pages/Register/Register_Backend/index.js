import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import {validate} from 'deep-email-validator'

import dotenv from "dotenv";

dotenv.config();
//taking port and mongodb url from .env file

const port = Number(process.env.PORT);
const MONGODB_URL  = process.env.MONGODB_URL;
const app = express()
app.use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
    })
  );
app.use(express.json())
app.use(express.urlencoded()) 





const userSchema = new mongoose.Schema({
    name: String,
    email: {type:String,unique:true},
    password: {type:String,minlength: 6,maxlength:8}
})

const User = new mongoose.model("userinfo", userSchema)

// app.get('/', (req, res) => {
//     res.send('sagar pawar')
// })

// Routes
app.get("/",(req,res)=>{
    res.send("connected");
})

app.post("/login", (req, res)=> {

    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

async function isEmailValid(email) {
    return validate(email)
  }

app.post("/signup", async(req, res)=> {

    const { name, email, password} = req.body

    let user = await User.findOne({email: email})
        if(user){
            res.send({message: "User already registerd"})
        } else {
            try{
                const {valid, reason, validators} = await isEmailValid(email)
                console.log(valid); 
            if(valid){
                const user1 = new User({name:name,email:email,password})
                await user1.save()
                return res.send({message:"singupsuccessful"});
            }else{
                res.send({message:"Invalid Email",messa:"error"})
            }
            

            }catch(e){
                res.send({message:e.message,messa:"error"});

            }
            

        }

    
}) 

app.listen(port,async()=>{  
     
    await mongoose.connect(`${MONGODB_URL}`) 
    
     console.log("server started at port 8080")
})
