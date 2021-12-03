import "./App.css";
import data from "./foods.json";
import React, { useState } from 'react';
import FoodBox from "./components/FoodBox";
import { Row } from 'antd'; //responsive columns with Ant Design
import AddFoodForm from "./components/AddFoodForm";

function App() {

  //state variables
  const [foods, setFoods] = useState(data)
  
  //delete
  const clickToDelete = (name) => {
        const deleteByName = foods.filter((deleteOne) => deleteOne.name !== name);
        setFoods(deleteByName)
    }

  // console.log(foods.length)

  //add new food
  const addNewFood = (newFood) => {
    setFoods([newFood, ...foods])
    data.push(newFood)
  }

  return (
    <div className="App" >

   <AddFoodForm addNewFood={addNewFood} style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} />
            
  
      <Row className = 'foodBoxes'>
        {foods.map((type) => {
            return(
              <FoodBox 
              // Each child in a list should have a unique "key" prop:
                key={type._id}
                foodList={type}
                clickToDelete={clickToDelete}
              />
            )})}
      </Row>
    </div>);
  }
  
  export default App;