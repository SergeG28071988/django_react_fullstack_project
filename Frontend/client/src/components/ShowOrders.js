import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowOrders = () => {

    const [orders, setOrders] = useState([])

    const getOrders = async () => {
        const response = await axios.get('http://localhost:8000/api/orders/') 
        // console.log(response.data)
        setOrders(response.data)
    }

    useEffect(() => {
        getOrders();
    }, [])

    return (
        <div>
            <div class="row text-center text-dark lh-2">
                 <h4>Список заказов в БД</h4>
            </div>
            <table className="table table-hover table-striped table-bordered text-start">
                <thead>
                    <tr>
                        <th>Фото</th>
                        <th>Номер заказа</th>
                        <th>Клиент</th>
                        <th>Название</th>
                        <th>Категория</th>
                        <th>Дата создания</th>
                        <th>Выполнен</th>
                        <th>Дата выполнения</th>
                        <th>Детали</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}> 
                            <td><img src={order.photo} alt="Order Photo" style={{ maxWidth: '100px' }} /></td> 
                            <td>{order.order_number}</td>
                            <td>{order.client}</td>
                            <td>{order.name}</td>
                            <td>{order.category}</td>
                            <td>{order.date_created}</td>
                            <td>{order.completed ? 'Да' : 'Нет'}</td> 
                            <td>{order.completion_date}</td>
                            <td> 
                                <Link to={`/order/${order.id}`}> 
                                    <button className="btn btn-primary btn-sm">Детали</button> 
                                </Link>
                            </td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowOrders;
