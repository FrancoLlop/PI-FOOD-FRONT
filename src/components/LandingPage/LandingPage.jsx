import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './LandingPage.css'
import logo from '../Resources/foodlogo.webp'
import video from '../Resources/Video.mp4'

 function LandingPage(){
    
    const [logotimer, setLogotimer] = useState(false)

    setTimeout(() =>{
    setLogotimer(true)
}, 6000)

    return (
        <div className='landingPage'>

            <video className='video' autoPlay loop muted>
                <source src={video} type='video/mp4'></source>
            </video>

            <Link to={'/home'}><img className={logotimer ? 'logo' : 'logoBack'} src={logo} alt={'logo'}/></Link>

        </div>
    )
}
export default LandingPage