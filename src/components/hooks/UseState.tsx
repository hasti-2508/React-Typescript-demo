import React, { useState } from 'react'

type User = {
    name: string
}

function UseState() {
    const[user, setUser]= useState<User | null>(null)
    function handleLogIn(){
        setUser({
            name: "hasti"
        })
    }
    function handleLogOut(){
        setUser(null)
    }
  return (
    <div>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
      <h1>Welcome: {user?.name}</h1> 
    </div>
  )
}

export default UseState
