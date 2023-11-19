import  { useEffect, useState } from 'react'
import "./ProductsMain.css"

import MainBase from '../../../Base/MBase/MainBase'
import ProductCardMain from './Card/prodCardMain'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../../Redux/Products/productsAction'

function ProductsPageMain() {
  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(fetchProducts()) 
   },[])
   
  
   
    const product=useSelector((prod)=>prod.products.products)
    console.log(product)
    
  return (
    <MainBase>
      
      <div className="row justify-content-center products-main">
        {product.length>0 &&
          product.map((prod) => (
            <div
              className="col-md-3 card-main"
              key={prod._id}
              
            >
              <ProductCardMain product={prod} />
              
            </div>
           
          ))}
      </div>
      
      

     
      </MainBase>
  )
}

export default ProductsPageMain