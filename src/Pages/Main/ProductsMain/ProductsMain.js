import  { useEffect, useState } from 'react'
import "./ProductsMain.css"

import MainBase from '../../../Base/MBase/MainBase'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../../Redux/Products/productsAction'

import ProductCardMain from './Card/prodCardMain'
import SideBar from '../../../Components/SideBar/SideBar'
import SearchBar from '../../../Components/searchBar/SearchBar'
import { Spinner } from 'react-bootstrap'

function ProductsPageMain() {
  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(fetchProducts()) 
   },[])
   
  
   
    const product=useSelector((prod)=>prod.products.products)
    const loading=useSelector((prod)=>prod.products.loading)
    
  return (
    <MainBase>
      
      <div className=' productPage-land'>
    
    <div className='row sideBar-land'>
      <SideBar/>
    </div>
    <div className='sideBarSearchBar'>
    <SearchBar />
    </div>
    {  loading? 
      <div className="row justify-content-center b "> <Spinner animation="border" variant="dark" size='xl' /></div>
     
      :
      <div className="row justify-content-center b ">
            
        {product &&
          product.map((prod) => (
            <div className="col-xl-2 col-md-3 col-sm-4 col-xs-5 card-land" key={prod._id}>
              <ProductCardMain product={prod} />
              
              </div>
          ))}
          </div>
}
      

      </div>
      
      
          

     
      </MainBase>
  )
}

export default ProductsPageMain
