import React, {useState, useEffect} from 'react'
import axios from 'axios';

const ShowOrders = () => {

    const [orders, setOrders] = useState([])

    const getOrders = async () => {
        const response = await axios.get('http://localhost:8000/api/orders/') 
        console.log(response.data)
    }

    useEffect(() => {
        getOrders();
    }, [])

    return (
        <div>
            <h1>Show All the Orders</h1>
        </div>
    );
};

export default ShowOrders;