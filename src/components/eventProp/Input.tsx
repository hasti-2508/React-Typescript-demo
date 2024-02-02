import React from 'react'
type inputProps = {
     value: string,
     handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({value}:inputProps) {
    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event)
    }
  return (
    <div>
      <input type='text' onChange={handleInput} value={value}/>
    </div>
  )
}

export default Input
