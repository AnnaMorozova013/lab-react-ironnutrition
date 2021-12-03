import "./App.css";
import data from "./foods.json";
import React, { useState } from 'react';
import FoodBox from "./components/FoodBox";
import { Row } from 'antd';
import { typeCastExpression } from "@babel/types";

function App() {

  //state variable of imported list (objects array)
  const [foods, setFoods] = useState(data)
  

  //delete
  const clickToDelete = (name) => {
        const deleteByName = foods.filter((deleteOne) => deleteOne.name !== name);
        setFoods(deleteByName)
    }

  console.log(foods.length)

  return (
    <div className="App">
            
      <Row>
        {foods.map((type) => {
            return(
              <FoodBox 
                key={type._id}
                foodList={type}
                clickToDelete={clickToDelete}
              />
            )})}
      </Row>
    </div>);
  }
  
  export default App;