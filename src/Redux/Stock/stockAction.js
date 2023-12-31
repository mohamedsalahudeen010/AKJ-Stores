const baseURL="https://akj-stores.onrender.com"

export const fetchStockRequest=()=>{
    return{
        type:"FETCH_STOCK_REQUEST"
    }
}

export const fetchStockSuccess=(data)=>{
    return{
        type:"FETCH_STOCK_SUCCESS",
        payload:data
    }
}

export const fetchStockFailure=(error)=>{
    return{
        type:"FETCH_STOCK_FAILURE",
        payload:error
    }
}

export const addItemToStock=(data)=>{
   return {
    type:"ADD_1_ITEM",
    payload:data
}
}


export const addToStock=(data)=>{
   
    return{
        type:"ADD_TO_STOCK",
        payload:data
    }
}


export const deleteOneStock=(product)=>{

    return{
        type:"DELETE_ONE_FROM_STOCK",
        payload:product
    }
}

export const deleteAllStock=()=>{
    return{
        type:"DELETE_ALL_FROM_STOCK",
        
    }
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Add Products >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const fetchAddToStock=(product)=>{
    // const products={
        
    //      productName:product.name,
    //      productImage:product.image,
    //      productVarient:varient,
    //      productQuantity:quantity,
    //      productPricePerItem:varient*product.prize,
    //     totalPrice:varient*product.prize*quantity
       
    // }
    
    return async (dispatch)=>{
        dispatch(addToStock(product))
        
        try {
            const response=await fetch(`${baseURL}/products/admin`,{
                method:"POST",
                body:JSON.stringify(product),
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token-admin")
                 }
            })
            const data=await response.json()
            console.log("POST",data)
          
        } catch (error) {
            console.log(error)
           
        }
    }
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Update Products >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

export const updateStock=(product)=>{
   
    const id=product._id
    console.log(id)
    return async (dispatch)=>{
        dispatch(addToStock(product))
        
        try {
            const response=await fetch(`${baseURL}/products/admin/${id}`,{
                method:"PUT",
                body:JSON.stringify(product),
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token-admin")
                 }
            })
            const data=await response.json()
            console.log("PUT",data)
            localStorage.setItem("cartItems",JSON.stringify(data.cart))
        } catch (error) {
            console.log(error)
           
        }
    }
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Fetch products >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

export const fetchStock=()=>{
    return async (dispatch)=>{
        dispatch(fetchStockRequest())
        
        try {
            const response=await fetch(`${baseURL}/products/admin`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token-admin")
                 }
            })
            const data=await response.json()
            console.log(data)
            dispatch(fetchStockSuccess(data))
            localStorage.setItem("cartItems",data.cart)
        } 
        catch (error) {
            console.log(error)
            dispatch(fetchStockFailure(error))
        }
    }
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Delete Items In Cart >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const deleteOneItemStock=(product)=>{
    
    const id=product._id
    return async (dispatch)=>{
        try {
            dispatch(deleteOneStock(product))
            const response=await fetch(`${baseURL}/products/admin/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token-admin")
                 }
            })
            const data=await response.json()
            console.log("DELETE",data)
            
        } catch (error) {
            console.log(error)
           
        }
    }
}



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Delete Items In Cart >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const deleteWholeStock=()=>{
    
    
    return async (dispatch)=>{
        try {
           dispatch(deleteAllStock())
            const response=await fetch(`${baseURL}/products/admin`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token-admin")
                 }
            })
            const data=await response.json()
            
            console.log(data)
        } catch (error) {
            console.log(error)
           
        }
    }
}
