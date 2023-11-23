import  { useEffect } from 'react'
import "./ProductLand.css"

import {useDispatch, useSelector} from "react-redux"
import ProductCardLand from './card/ProdCardLand'

import LandingBase from '../../../Base/LBase/LandingBase'
import { fetchProducts } from '../../../Redux/Products/productsAction'
import SideBar from '../../../Components/SideBar/SideBar'

import SearchBar from '../../../Components/searchBar/SearchBar'
import { Spinner } from 'react-bootstrap'




function ProductLand() {

  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(fetchProducts()) 
   },[])
   
  const product=useSelector((prod)=>prod.products.products)
 const loading=useSelector((prod)=>prod.products.loading)

  return (
<LandingBase>

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
              <ProductCardLand product={prod} />
              
              </div>
          ))}
          
        
          </div>
     }  
      

      </div>
    </LandingBase>
  )
}

export default ProductLand
