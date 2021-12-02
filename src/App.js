import "./App.css";
import data from "./foods.json";
import React, { useState } from 'react';
import FoodBox from "./components/FoodBox";
import { Button } from 'antd';

function App() {

  //state variable of imported list (objects array)
  const [foods, setFoods] = useState(data)
  const [foodFilter, setFoodFilter] = useState(data)
  

  //delete
  const clickToDelete = (props) => {
    setFoods(
      foods.filter((type) => {
        if(type.name===props){
          return false
        } else {
          return true
        }
      } 
     )
    )
  }

  //map over state variable
  console.log(foods.length)
  const foodList = data.map(food => {
    return (
      <div>
        <FoodBox food={food} clickToDelete={clickToDelete} />
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