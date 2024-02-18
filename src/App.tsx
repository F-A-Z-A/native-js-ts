import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    
    </div>
  );
}

export default App;


const users = [
  {name: "Luda", age: 11},
  {name: "Andrey", age: 22},
  {name: "Anna", age: 33},
]

const liElement = users.map((u, i) => <li key={i}>{u.name}</li>)