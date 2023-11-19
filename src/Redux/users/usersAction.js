
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

export const fetchUsers=(user)=>{
    return async (dispatch)=>{
        console.log(user)
        dispatch(fetchUsersRequest())
        try {
            const response=await fetch(`${baseURL}/userLogin/one`,{
                method:"POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                  },
            })
            const data=await response.json()
            console.log(data)
            dispatch(fetchUserSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchUsersFailure(error.message))
        }
    }
}

