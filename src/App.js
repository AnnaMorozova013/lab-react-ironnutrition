import "./App.css";
import foods from "./foods.json";
import React, { useState } from 'react';

function App() {

  //state variable of imported list (objects array)
const setInitialValue = () => {
  return foods
}
const [food, setFood] = useState(() => setInitialValue())

//map over state variable

const foodList = food.map(meal => {
return (
  <div>
  <p> {meal.name} </p>
  <img src={meal.image} alt='' width={'300px'} />
  </div>
)  
})
  return (
  <div className="App">
<h1>
  Food List
</h1>
{foodList}
  </div>
  )
}


export default App;