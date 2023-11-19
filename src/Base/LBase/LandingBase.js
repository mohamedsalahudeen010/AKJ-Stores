
import LandingNavBar from './NavBar/LandingNavBar'




function LandingBase(props) {
  return (
    <div className='Base'>
     
        <LandingNavBar/>
        <div>{props.children}</div>
    </div>
  )
}

export default LandingBase