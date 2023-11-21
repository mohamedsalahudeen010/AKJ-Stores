import  { useEffect } from 'react'
import AdminBase from '../../../Base/ABase/AdminBase'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../Redux/Products/productsAction'
import ProductCardAdmin from './Card/ProductCardAdmin'
import { fetchStock } from '../../../Redux/Stock/stockAction'
import { fetchCart } from '../../../Redux/Cart/cartAction'
import SideBar from '../../../Components/SideBar/SideBar'



function AdminProductPage() {

  const dispatch=useDispatch()
  
  useEffect(()=>{
    if(localStorage.getItem("email-admin")){
      dispatch(fetchStock())
    }
    else if(localStorage.getItem("email")){
      dispatch(fetchProducts()) 
      dispatch(fetchCart(localStorage.getItem("email")))
      console.log(localStorage.getItem("email"))
    }
  
  },[])
  const product=useSelector((stock)=>stock.stock.stock)
  console.log("WWWWWWWWWWWW",product)
  return (
    <AdminBase>
         <div className='row sideBar-land'>
      <SideBar/>
    </div>
      <div className="row justify-content-center products-admin"
      style={{paddingTop:"12rem"}}>
        {product &&
          product.map((prod) => (
            <div
              className="col-lg-2 col-md-4 col-sm-6 col-xs-6 m-1 card-admin"
              key={prod._id}
              
            >
              <ProductCardAdmin product={prod} />
              
            </div>
           
          ))}
      </div>
      
      
    </AdminBase>
  )
}

export default AdminProductPage
