import React from 'react'
type buttonProp ={
    // handleClick: () => void //inCase button is not returning anything
    // handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id:number) => void
}


function Button({handleClick}:buttonProp) {
  return (
    <div>
      <button onClick={(e) => handleClick(e,1)}>Click Me</button>
    </div>
  )
}

export default Button
