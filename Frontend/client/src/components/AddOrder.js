import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router';
import { useNavigate } from 'react-router-dom';


const AddOrder = () => {

    const categories = [
        'Процессоры',
        'Материнские платы',
        'Видеокарты',
        'Оперативная память',
        'SSD-диски',
        'HDD-диски',
        'Блоки питания'
    ]; 
    const statuses = ['Поступил', 'Выполняется', 'Закрыт'];

    const [photo, setPhoto] = useState(null); // Изначально пустая строка
    const [order_number, setOrder_Number] = useState(''); // Изначально пустая строка
    const [client, setClient] = useState(''); // Изначально пустая строка
    const [name, setName] = useState(''); // Изначально пустая строка
    const [category, setCategory] = useState(''); // Изначально пустая строка
    const [status, setStatus] = useState(''); // Изначально пустая строка
    const [date_created, setDate_Created] = useState(''); // Изначально пустая строка
    const [completed, setCompleted] = useState(false); // Изначально false
    const [completion_date, setCompletion_Date] = useState(''); // Изначально пустая строка

    const navigate = useNavigate();

    const AddOrderInfo = async () => {
        let formfield = new FormData()
        
        formfield.append('order_number', order_number)
        formfield.append('client', client)
        formfield.append('name', name)
        formfield.append('category', category)
        formfield.append('status', status)
        formfield.append('order_number', order_number)
        formfield.append('date_created', date_created)
        formfield.append('completed', completed)
        formfield.append('completion_date', completion_date)

        if (photo != null){
            formfield.append('photo', photo)
        }

        try {
            const response = await axios.post('http://localhost:8000/api/orders/', formfield);
            console.log(response.data);
            // Add your logic to handle successful order creation
            // For example, you can redirect the user or show a success message
            navigate('/');
        } catch (error) {
            console.error('Error adding order:', error);
            // Handle the error (e.g., display an error message to the user)
        }
    }

    return (
        <div>
            <h1>Добавить заказ</h1>
            <div className='container'>
                <div className='form-group'>
                    <div className='form-control'>     
                        <label>Выберите фото товара</label>                  
                        <input 
                            type='file' 
                            className='form-control form-control-lg'                             
                            name='photo'
                            onChange={(e) => setPhoto(e.target.files[0])}
                        />
                    </div>
                    <div className='form-control'>
                        <input 
                            type='text' 
                            className='form-control form-control-lg' 
                            placeholder='Введите номер заказа'
                            name='order_number' value={order_number}
                            onChange={(e) => setOrder_Number(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <input 
                            type='text' 
                            className='form-control form-control-lg' 
                            placeholder='Введите клиента'
                            name='client' value={client}
                            onChange={(e) => setClient(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <input 
                            type='text' 
                            className='form-control form-control-lg' 
                            placeholder='Введите наименование товара'
                            name='name' value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <select 
                            className='form-control form-control-lg'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Выберите категорию</option> 
                            {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div className='form-control'>
                        <select 
                            className='form-control form-control-lg'
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="">Выберите статус заказа</option> 
                            {statuses.map((status) => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div className='form-control'>
                        <input
                            type='date' 
                            className='form-control form-control-lg' 
                            placeholder='Дата создания'
                            name='date_created'
                            value={date_created}
                            onChange={(e) => setDate_Created(e.target.value)} 
                        />
                    </div>
                    <div className='form-control'>
                        <input
                            type='checkbox'
                            className='form-check-input'
                            name='completed'
                            checked={completed}
                            onChange={(e) => setCompleted(e.target.checked)} 
                        />
                        <label className='form-check-label' htmlFor='completed'>
                            Заказ выполнен
                        </label>
                    </div>
                    <div className='form-control'>
                        <input
                            type='date'
                            className='form-control form-control-lg'
                            placeholder='Дата выполнения'
                            name='completion_date'
                            value={completion_date}
                            onChange={(e) => setCompletion_Date(e.target.value)}
                            disabled={!completed} // Отключено, если заказ не выполнен
                        />
                    </div>
                    <button className='btn btn-primary' type="submit" onClick={AddOrderInfo}>Добавить заказ</button>
                </div>
            </div>
        </div>
    );

};

export default AddOrder;
