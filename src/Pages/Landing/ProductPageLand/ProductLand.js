import  { useEffect } from 'react'
import "./ProductLand.css"

import {useDispatch, useSelector} from "react-redux"
import ProductCardLand from './card/ProdCardLand'

import LandingBase from '../../../Base/LBase/LandingBase'
import { fetchProducts } from '../../../Redux/Products/productsAction'




function ProductLand() {

  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(fetchProducts()) 
   },[])
   
  const product=useSelector((prod)=>prod.products.products)
  console.log( "product Land : ",  product)

  return (
<LandingBase>
      <div className="row justify-content-center productPage-land">
     
              
              
              
            
        {product &&
          product.map((prod) => (
            <div className="col-xl-2 col-md-3 col-sm-4 col-xs-5 card-land" key={prod._id}>
              <ProductCardLand product={prod} />
              
              </div>
          ))}
          
      </div>
      
      

     
    </LandingBase>
  )
}

export default ProductLand
