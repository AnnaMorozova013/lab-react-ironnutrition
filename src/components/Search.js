import React, { useState } from 'react';
import "antd/dist/antd.css";
import { Input, Divider } from 'antd';

export default function Search ({filterFoodList}) {

const [foodName, setFoodName] = useState('')

const handleSearch = (e) => {
    setFoodName(e.target.value);
    filterFoodList(e.target.value)
    }

return (
        <div className="search-bar">
            <Divider>Search</Divider>
            <label>Search</label>
            <Input className="search-input" value={foodName} type="text" onChange={handleSearch}  />
        </div>
    )
}

