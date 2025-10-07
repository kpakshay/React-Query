import { useEffect, useState } from 'react'
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import './App.css'

function App() {
  const [userData, setUser] = useState([])

  // useEffect( ()=>{
  //   userList()
  // },[])

  var userList=async()=>{
    let response=await axios.get("http://localhost:5000/users")
    setUser(response.data)
    console.log(response.data,"userlist")
    return(response.data)
  }

  const {data,error,isLoading} =useQuery({
    queryKey:["users"],
    queryFn:userList,
  })

  const handleClick=async()=>{
    let newUser={id:5,name:"Rajuu"}
    let response= await axios.post("http://localhost:5000/users",newUser)
    console.log(response)
  }
  console.log(data,"==data",error,"==error",isLoading,"==isloading")
  return (
    <>
      <div>hbbhjgvhyjvg</div>
      <div>
        <ul>
      {userData ? (
        userData.map((user:any) => (
          <li key={user.id}>{user.name}</li>
        ))
      ) : (
        <></>
      )}
    </ul>
      </div>
      <button onClick={handleClick}>add user</button>
      
    </>
  )
}

export default App
