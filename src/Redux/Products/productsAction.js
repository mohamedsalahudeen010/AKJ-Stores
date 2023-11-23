const baseURL="https://akj-stores.onrender.com" 

export const fetchProductsRequest=()=>{
    return{
        type:"FETCH_PRODUCTS_REQUEST"
    }
}

export const fetchProductsSuccess=(data)=>{
    return{
        type:"FETCH_PRODUCTS_SUCCESS",
        payload:data
    }
}

export const fetchProductsFailure=(error)=>{
    return{
        type:"FETCH_PRODUCTS_FAILURE",
        payload:error
    }
}

export const fetchProducts=()=>{
    return async (dispatch)=>{
        dispatch(fetchProductsRequest())
       
        try {
            const response=await fetch(`${baseURL}/products`,{
                method:"GET"
            })
            const data=await response.json()
            console.log(data)
            dispatch(fetchProductsSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchProductsFailure(error))
        }
    }
}
export const fetchProductsWithQuery=(query)=>{
    return async (dispatch)=>{
        dispatch(fetchProductsRequest())
       
        try {
            const response=await fetch(`${baseURL}/products?product=${query}`,{
                method:"GET"
            })
            const data=await response.json()
            console.log(data)
            dispatch(fetchProductsSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchProductsFailure(error))
        }
    }
}

