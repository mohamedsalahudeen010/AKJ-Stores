
import  { createContext, useState } from 'react'
export const AkjContext=createContext(null)


function Context(props) {
    const [openCom, setOpenCom] = useState(false);
    const [openLand, setOpenLand] = useState(false);
    const [mobile,setMobile]=useState(false)
    const [electronics,setElectronics]=useState(false)
    const [toys,setToys]=useState(false)
    const [furniture,setFurniture]=useState(false)
    const baseURL="https://shine-traders-back-end.vercel.app"
  return (
    <AkjContext.Provider value={{openCom,setOpenCom,openLand,setOpenLand,baseURL,mobile,setMobile,electronics,setElectronics
    ,toys,setToys,furniture,setFurniture}}>
        {props.children}
    </AkjContext.Provider>
  )
}

export default Context
