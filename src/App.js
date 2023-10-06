import { Route, Routes } from 'react-router-dom';
import './vendor/css/bootstrap.min.css';
import './vendor/css/font-awesome.min.css';
import './vendor/css/slicknav.min.css';
import './vendor/css/style.css';
import './css/Cart.css';
import './css/Login.css';
import './css/Signup.css';
import './css/Footer.css';
import './css/Forgotpassword.css';
import './css/Personalinformation.css';
import './Product.css';
import './css/Ordermanagement.css';
import './css/Header.css';
import Index from './pages/index.js';
import Product from './pages/product';
import Login from './components/dangnhap';
import Cart from './components/cart';
import Pay from './components/pay';
import SignUp from './components/signup';
import ForgotPassword from './components/forgotpassword';
import PersonalInformation from './components/personalinformation';
import OrderManagement from './components/order_management';
import Detail from './pages/product_detail';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/list_all' element={<Product />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/pay' element={<Pay />}/>;
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/forgotpassword' element={<ForgotPassword />}/>
        <Route path='/personalinformation' element={<PersonalInformation />}/>
        <Route path='/ordermanagement' element={<OrderManagement />}/>
        <Route path='/detail' element={<Detail />}/>
      </Routes>
    </>
  );
}

export default App;