import express from "express"
import cors from "cors";

const app= express()
const PORT= 5000

app.use(cors())
app.use(express.json())

let users=[
    {id:1, name:"Alice"},
    {id:2, name:"Davis"},
    {id:3, name:"teena"},
    {id:4, name:"Willy Tate"}
]

app.get('/',(req,res)=>{
    res.json({message:"Helloo from json"})
    // res.send("hello from send")
})

app.get("/users",(req,res)=>{
    res.send(users)
    console.log(users)
})

app.post("/users",(req,res)=>{
    const newUser=req.body
    users.push(newUser)
    res.status(201).json(newUser)
})
app.listen(PORT, ()=>{
    console.log(`App is running in http://localhost:${PORT}`)
})