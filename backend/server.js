const express= require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors());
require('dotenv').config();
require("./models/db")
const UserModel = require("./models/User")
const bodyParser = require("body-parser")
const ProductRoutes = require("./Routes/ProductRoutes")

app.use(bodyParser.json())

const PORT = process.env.PORT || 8082
app.get("/ping", (req,res)=>{
    res.send("PONG")
})

app.post("/createUser" , (req,res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.get("/listuser", (req,res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.get("/getuser/:id", (req,res)=>{
    const id= req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})


app.put("/updateUser/:id" , (req,res)=>{
    
     const id= req.params.id;
     UserModel.findByIdAndUpdate({_id:id},{
        
    name:req.body.name, 
    email:req.body.email, 
    age:req.body.age
    })
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.delete("/deleteUser/:id", (req,res)=>{
     const id= req.params.id;
     UserModel.findByIdAndDelete({_id:id})
     .then(res=>res.json(user))
     .catch(err=>res.json(err))
})

app.use('/api/products',ProductRoutes)


app.listen(PORT, ()=>{
    console.log(`Server is runnig on ${PORT}`)
})