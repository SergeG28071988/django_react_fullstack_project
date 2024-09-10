import logo from './logo.svg';
import './App.css';
import ShowOrders from './components/ShowOrders';
import AddOrder from './components/AddOrder';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarMenu from './components/NavBarMenu';
import OrderDetail from './components/OrderDetail';

function App() {
  return (
    <div className="App">    
      <BrowserRouter>
         <NavBarMenu/>
          <Routes>
            <Route exact path="/" element={<ShowOrders />} />
            <Route exact path="addOrder" element={<AddOrder />} />    
            <Route exact path="orderDetail" element={<OrderDetail />} />                  
          </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
