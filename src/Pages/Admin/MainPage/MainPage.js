import { useEffect, useState } from 'react'
import "./MainPage.css"



import { useDispatch } from 'react-redux';
import { fetchCart } from '../../../Redux/Cart/cartAction';

import AdminBase from '../../../Base/ABase/AdminBase';

function AdminHomePage() {

  const dispatch=useDispatch()

  const [userEmail,setUserEmail]=useState(localStorage.getItem("email"))

  

  useEffect(()=>{
    dispatch(fetchCart(userEmail))
  },[])
 
  return (
    
    
      <AdminBase>

      <div className='mainPage'>
      
      
      <div className='carousel-main'>
       
    </div>
   
       </div>
       </AdminBase> 
    
  )
}

export default AdminHomePage
