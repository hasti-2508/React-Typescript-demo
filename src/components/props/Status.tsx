import React from 'react'
type statusprop = {
    status : "loading" | "success" | "error"
}
function Status({status}:statusprop) {
    let message
    if(status === "loading"){
        message = "Loading...."
    }
    else if(status === "success"){
        message = "success..."
    }
    else if(status === "error"){
        message = "error..."
    }
  return (
    <div>
        <h2>status - {message}</h2>
    </div>
  )
}

export default Status
