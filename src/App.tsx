import React from 'react';
import './App.css';
import Greet from './components/props/Greet';
import PersonList from './components/props/PersonList';
import Status from './components/props/Status';
import Heading from './components/props/Heading';
import Headingtext from './components/props/Headingtext';
import Button from './components/eventProp/Button';
import Input from './components/eventProp/Input';
const nameList = [
  {
    first: 'Bruce',
    last: 'Wayne'
  },
  {
    first: 'Clark',
    last: 'Kent'
  },
  {
    first: 'Princess',
    last: 'Diana'
  }
]


function App() {

  return (
   <>
    <Greet name={"Hasti"} message={10}/>
    <PersonList nameList={nameList}/>
    <Status status={"loading"}/>
    <Heading>
      <Headingtext >{"This one is coming with component inside component"}</Headingtext>
    </Heading>
    <Button handleClick={(event ,id ) => {
      console.log(event,id)
    }}/>
    <Input value='' handleChange={(e) => console.log(e)} />
    </>

  );
}

export default App;
