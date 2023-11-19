
import  { createContext, useState } from 'react'
export const AkjContext=createContext(null)


function Context(props) {
    const [openCom, setOpenCom] = useState(false);
    const [openLand, setOpenLand] = useState(false);
    const baseURL="https://shine-traders-back-end.vercel.app"
  return (
    <AkjContext.Provider value={{openCom,setOpenCom,openLand,setOpenLand,baseURL}}>
        {props.children}
    </AkjContext.Provider>
  )
}

export default Context
