import  { useEffect, useState } from 'react'
import "./ProductsMain.css"

import MainBase from '../../../Base/MBase/MainBase'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../../Redux/Products/productsAction'

import ProductCardMain from './Card/prodCardMain'
import SideBar from '../../../Components/SideBar/SideBar'
import ProductCardLand from '../../Landing/ProductPageLand/card/ProdCardLand'

function ProductsPageMain() {
  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(fetchProducts()) 
   },[])
   
  
   
    const product=useSelector((prod)=>prod.products.products)
    console.log(product)
    
  return (
    <MainBase>
      
      <div className=' productPage-land'>
    
    <div className='row sideBar-land'>
      <SideBar/>
    </div>
    
      <div className="row justify-content-center b ">
            
        {product &&
          product.map((prod) => (
            <div className="col-xl-2 col-md-3 col-sm-4 col-xs-5 card-land" key={prod._id}>
              <ProductCardLand product={prod} />
              
              </div>
          ))}
          </div>
     
      

      </div>
      
      

     
      </MainBase>
  )
}

export default ProductsPageMain
