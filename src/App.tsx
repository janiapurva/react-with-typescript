import React, { useState } from "react";
import "./App.css";
import List from './components/List'
import AddToList from './components/AddToList'

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
  const [people, setPeople] = useState<IState["people"]>([{
    name:"Lebron James",
    url:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/LeBron_James_crop.jpg/220px-LeBron_James_crop.jpg",
    age:36,
    note: "Allergic to staying in same team"
  }
])
  
  
  return (
    <div className="App">
      <h1>People invited in Party</h1>
      <List people={people}/>
      <AddToList/>
      
    </div>
  );
}

export default App;
