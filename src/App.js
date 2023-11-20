import {  Route, Routes } from 'react-router-dom';
import './App.css';
import {  useContext, useEffect } from 'react';
import { fetchProducts } from './Redux/Products/productsAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



import { fetchCart } from './Redux/Cart/cartAction';


import { fetchStock } from './Redux/Stock/stockAction';
import { fetchAllOrders, fetchOrders} from './Redux/orders/ordersAction';
import LandingPage from './Pages/Landing/LandingPage/LandingPage';
import LogInPage from './Components/login/LoginPage';
import SignUpPage from './Components/signUp/SignUp';
import AdminLogInPage from './Components/adminLogin/AdminLoginPage';
import AdminSignUpPage from './Components/adminSignUp/AdminSignUp';
import ProductLand from './Pages/Landing/ProductPageLand/ProductLand';
import MainPage from './Pages/Main/MainPage/MainPage';
import ProductsPageMain from './Pages/Main/ProductsMain/ProductsMain';
import ContactMain from './Pages/Main/M-Contact/ContactMain';
import OrdersUser from './Pages/Main/OrdersUserPage/OrdersUser';
import CartPage from './Pages/Main/CartPage/CartMain';
import AdminHomePage from './Pages/Admin/MainPage/MainPage';
import AdminProductPage from './Pages/Admin/ProductPage.js/AdminProductPage';
import OrdersPage from './Pages/Admin/OrdersPage/OrdersPage';
import StockPage from './Pages/Admin/StockPage/StockPage';
import AddProducts from './Pages/Admin/StockPage/AddProducts/AddProducts';
import UpdateProducts from './Pages/Admin/StockPage/UpdateProducts/UpdateProducts';
import { AkjContext } from './Context';
import { fetchUsers } from './Redux/users/usersAction';

import ForgetPageUser from './Components/userForgetPage/ForgetPageUser';
import ForgetPageAdmin from './Components/adminForgetPage/ForgetPageAdmin';




function App() {
  const dispatch=useDispatch()


  useEffect(()=>{
    if(localStorage.getItem("email-admin")){
      dispatch(fetchStock())
      dispatch(fetchAllOrders())
    }
    else if(localStorage.getItem("email")){
      dispatch(fetchProducts()) 
      dispatch(fetchOrders(localStorage.getItem("email")))
      dispatch(fetchCart(localStorage.getItem("email")))
      dispatch(fetchUsers(localStorage.getItem("email")))
      console.log(localStorage.getItem(localStorage.getItem("email")))
    }
  
  },[])

  const { openCom, setOpenCom, openLand, setOpenLand } =
    useContext(AkjContext);
  return (
    <div className="App">
     
      <Routes>

        <Route exact path="/" element={<LandingPage/>}/>

        <Route path="/login" element={<LogInPage/>} />
          
        <Route path="/signUp" element={<SignUpPage/>}/>

        <Route path="/forgetPageUser" element={<ForgetPageUser/>}/>

        <Route path="/adminLogin" element={<AdminLogInPage/>}/>
          
        <Route path="/adminSignUp" element={<AdminSignUpPage/>}/>

        <Route path="/forgetPageAdmin" element={<ForgetPageAdmin/>}/>
      
        <Route path="/productsLand" element={<ProductLand/>}/>

        <Route path="/main" element={<MainPage/>}/>
          
        <Route path="/productsMain" element={<ProductsPageMain/>}/>
          
        <Route path="/contactMain" element={<ContactMain/>}/>

        <Route path="/ordersUser" element={<OrdersUser/>}/>
          
        <Route path="/cart" element={<CartPage/>}/>
          
        <Route path="/adminPage" element={<AdminHomePage/>}/>

        <Route path="/adminProduct" element={<AdminProductPage/>}/>

        <Route path="/orders" element={<OrdersPage/>}/>
             
        <Route path="/stock" element={<StockPage/>}/>
      
        <Route path="/addProducts" element={<AddProducts/>}/>
    
        <Route path="/updateProducts/:id" element={ <UpdateProducts/>}/>
         
      
        </Routes>
    </div>
  );
}

export default App;
