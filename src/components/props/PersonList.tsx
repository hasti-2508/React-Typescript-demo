import React from 'react'
type namesList ={
    nameList:{
        first: string,
        last: string
    }[]//array type names:{}[]
}


function PersonList({nameList}:namesList) {
  return (
    <div>
        {
            nameList.map((name) => (
               <div key={Math.random()}>
                  <h2>{name.first} {name.last}</h2>
               </div>
            ))
        }
      
    </div>
  )
}

export default PersonList
