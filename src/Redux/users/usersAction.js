
const baseURL="https://akj-stores.onrender.com"
export const fetchUsersRequest=()=>{
    return{
        type:"FETCH_USERS_REQUEST"
    }
}

export const fetchUserSuccess=(data)=>{
    return{
        type:"FETCH_USERS_SUCCESS",
        payload:data
    }
}

export const fetchUsersFailure=(error)=>{
    return{
        type:"FETCH_USERS_FAILURE",
        payload:error
    }
}

export const fetchUsers=(email)=>{
    return async (dispatch)=>{
        dispatch(fetchUsersRequest())
        try {
            const response=await fetch(`${baseURL}/userLogin/one?email=${email}`,{
                method:"GET"
            })
            const data=await response.json()
            dispatch(fetchUserSuccess(data))
        } catch (error) {
            console.log(error);
            dispatch(fetchUsersFailure(error.message))
        }
    }
}



