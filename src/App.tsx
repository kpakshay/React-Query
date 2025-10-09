import { useEffect, useState } from 'react'
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import './App.css'
import NewUser from './components/NewUser';

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

  useQuery({
    queryKey:["users"],
    queryFn:userList,
    enabled:true,
    refetchOnWindowFocus:false
  })

  // const handleClick=async()=>{
  //   let newUser={id:5,name:"Rajuu"}
  //   let response= await axios.post("http://localhost:5000/users",newUser)
  //   console.log(userData.length,"length")
  // }
  return (
    <>
      <div>User List</div>
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
      <NewUser count={userData.length}/>
      {/* <button onClick={handleClick}>user length</button> */}
      
    </>
  )
}

export default App
