import React, { useState } from "react";
import "./App.css";
import List from './components/List'

//  define state with interface
interface IState{
people:{
  name:string
  age:number
  url:string
  note?:string
}[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([])

  
  return (
    <div className="App">
      <h1>People invited in Party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
