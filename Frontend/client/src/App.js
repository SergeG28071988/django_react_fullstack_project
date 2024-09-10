import logo from './logo.svg';
import './App.css';
import ShowOrders from './components/ShowOrders';
import AddOrder from './components/AddOrder';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ShowOrders />} />
            <Route exact path="addOrder" element={<AddOrder />} />            
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
