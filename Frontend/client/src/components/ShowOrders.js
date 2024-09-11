import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowOrders = () => {

    const [orders, setOrders] = useState([])

    const [searchQuery, setSearchQuery] = useState(''); // Состояние для поиска

    const getOrders = async () => {
        const response = await axios.get('http://localhost:8000/api/orders/') 
        // console.log(response.data)
        setOrders(response.data)
    }

    useEffect(() => {
        getOrders();
    }, [])

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredOrders = orders.filter((order) => {
        return order.order_number.toString().includes(searchQuery); 
    });

    const handlePrint = () => {
        window.print();
    };

    return (
        <div>
            <div class="row text-center text-dark lh-2">
                 <h4>Список заказов в БД</h4>
                 <div className="col-md-4 offset-md-4"> 
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Поиск по номеру заказа" 
                        value={searchQuery} 
                        onChange={handleSearchChange} 
                    />
                </div>
            </div>
            <button className="btn btn-secondary" onClick={handlePrint}>Печать</button> 
            <table className="table table-hover table-striped table-bordered text-start">
                <thead>
                    <tr>
                        <th>Фото</th>
                        <th>Номер заказа</th>
                        <th>Клиент</th>
                        <th>Название</th>
                        <th>Категория</th>
                        <th>Статус</th>
                        <th>Дата создания</th>
                        <th>Выполнен</th>
                        <th>Дата выполнения</th>
                        <th>Детали</th>
                    </tr>
                </thead>
                <tbody>
                       {filteredOrders.map((order, index) => (
                        <tr key={index}> 
                            <td><img src={order.photo} alt="Order Photo" style={{ maxWidth: '100px' }} /></td> 
                            <td>{order.order_number}</td>
                            <td>{order.client}</td>
                            <td>{order.name}</td>
                            <td>{order.category}</td>
                            <td>{order.status}</td>
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
