import React from 'react'

type greet ={
  name: string,
  message?: number //it will make this prop optional
}

function Greet({name,message}:greet) {
  return (
    <div>
      <h1>Hey {name}!</h1>
      <p>you have new {message} messages!</p>
    </div>
  )
}
// function Greet({name,message} : {name: string, message: number}) {
//   return (
//     <div>
//       <h1>Hey {name}!</h1>
//       <p>you have new {message} messages!</p>
//     </div>
//   )
// }

export default Greet
