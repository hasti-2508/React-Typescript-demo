import React, { useReducer } from 'react'
type State= {
    count : number
}

type Action ={
    type: string,
    //payload: number
}
const initialState ={
    count: 0
}
const reducer = (state :State , action: Action) => {
    switch(action.type){
        case("INC"):
            return {count: state.count++}
        case("DEC"):
            return {count: state.count--}
        default:
            return state
    }
}

function UseReducer() {
 const[state,dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      count: {state.count}
      <button onClick={() => dispatch({type: "INC"})}>Increment</button>
      <button onClick={() => dispatch({type: "DEC"})}>Decrement</button>
    </div>
  )
}

export default UseReducer
