import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"

const NewUser =({count}:{count:number}) =>{
    const query=useQueryClient()
    const [userName,setUserName]= useState('')

    const addNewUser = async (newUser:string) =>{
        let response = await axios.post("http://localhost:5000/users",{
            id : count+1,
            name: newUser
        })
        console.log( response.data,"==sdata",count,"count")
    }

    const {mutate} =useMutation({
        mutationFn: addNewUser,
        onSuccess:()=>{
            query.invalidateQueries({
                queryKey:["users"]
            })
        }
    })

    return(
        <>
        <h3>Add New User</h3>
        <input type="text" name="newuser" value={userName} placeholder="Enter user name here" onChange={(e)=>{setUserName(e.target.value)}}/>
        <button onClick={()=>mutate(userName)}>Add New User</button>
        </>
    )
}
export default NewUser