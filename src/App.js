import "./App.css";
import data from "./foods.json";
import React, { useState } from 'react';
import FoodBox from "./components/FoodBox";

function App() {

  //state variable of imported list (objects array)
const setInitialValue = () => {
  return data
}
const [foods, setFoods] = useState(() => setInitialValue())

//map over state variable

const foodList = data.map(food => {
return (
  <div>
   <FoodBox food={food}/>
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