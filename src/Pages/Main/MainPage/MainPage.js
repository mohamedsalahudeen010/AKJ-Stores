import  { useEffect, useState } from 'react'
import "./MainPage.css"
import MainBase from '../../../Base/MBase/MainBase';
import { useDispatch } from 'react-redux';
import { fetchCart } from '../../../Redux/Cart/cartAction';
// import { useSelector } from 'react-redux';

function MainPage() {

  const dispatch=useDispatch()

  const [userEmail,setUserEmail]=useState(localStorage.getItem("email"))
  
  console.log(userEmail)

  useEffect(()=>{
    setUserEmail(localStorage.getItem("email"))
    dispatch(fetchCart(userEmail))
  },[userEmail])
 
  return (
    
    
      <MainBase>

      <div className='mainPage'>
      
      
      <div className='carousel-main'>
       
    </div>
   
       </div>
       </MainBase>  
    
  )
}

export default MainPage