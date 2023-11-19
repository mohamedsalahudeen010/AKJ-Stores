
import "./LandingPage.css"

import LandingBase from '../../../Base/LBase/LandingBase';



function LandingPage() {
 
  return (
    
    <LandingBase>

      <div className='landingPage'>
      <div className='carousel-land'>
       
  
    </div>

    <div className='row'>
      <div className='col'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AX7-BGXFTCg" title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <div className='col'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/lZMpbWLcLAY" title="YouTube video player" frameBorder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      
    </div>

    <div className='row'>
      <div className='col'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/qZotvuziHmw" title="YouTube video player" frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   </div>

      <div className='col'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FsrHHH6wfbA" title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      
    </div>

    
       </div>
       
    </LandingBase>
  )
}

export default LandingPage