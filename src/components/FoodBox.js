
import React from 'react';
import { Card, Col, Button } from "antd";
import "antd/dist/antd.css";

export default function FoodBox({ foodList, clickToDelete }) {
    return (

        <Col className="foodBoxes">
            <Card
                title={foodList.name}
                style={{ width: 230, height: 300, margin: 10 }}>
                <img src={foodList.image} height={60} alt='' />
                <p>Calories: {foodList.calories}</p>
                <p>Servings: {foodList.servings}</p>
                <p>
                    <b>Total Calories: {foodList.calories * foodList.servings} kcal</b>
                </p>
                <Button onClick={() => clickToDelete(foodList.name)} type="primary"> Delete </Button>
            </Card>
        </Col>
    )
}
