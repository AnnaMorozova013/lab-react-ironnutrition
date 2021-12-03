import React, { useState } from 'react';
import "antd/dist/antd.css";
import { Input, Divider } from 'antd';

export default function AddFoodForm(props) {

    const [name, setName] = useState('')
    const [image, setImage] = useState(null)
    const [calories, setCalories] = useState('')
    const [servings, setServings] = useState('')


    const handleName = (event) => setName(event.target.value)
    const handleImage = (event) => setImage(event.target.value)
    const handleCalories = (event) => setCalories(event.target.value)
    const handleServings = (event) => setServings(event.target.value)

    const handleSubmit = (event) => {
        //prevent Browser from reloading:
        event.preventDefault();
        //create new object:
        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        };
        props.addNewFood(newFood)
        setName("")
        setImage(null)
        setCalories(0)
        setServings(0)
    }

    return (

        <div className="addNewFood"  >

            <form onSubmit={handleSubmit}  >
                <Divider> Add Food </Divider>
                <label>Name</label>
                <Input type="text" value={name} onChange={handleName} />

                <label>Image</label>
                <Input type="file" value={image} onChange={handleImage} />

                <label>Calories</label>
                <Input type="number" value={calories} onChange={handleCalories} />

                <label>Servings</label>
                <Input type="number" value={servings} onChange={handleServings} />

                <button type="submit">Add food</button>

            </form>
        </div>
    );
}


