import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './LandingPage.css'
import logo from '../Resources/foodlogo.webp'
import imageback from '../Resources/fondo.jpg'
 function LandingPage(){
    
    const [logotimer, setLogotimer] = useState(false)

    setTimeout(() =>{
    setLogotimer(true)
}, 3000)

    return (
        <div className='landingPage'>

            <img className='imageback' src={imageback} alt='imageback'/>
           

            <Link to={'/home'}><img className={logotimer ? 'logo' : 'logoBack'} src={logo} alt={'logo'}/></Link>

        </div>
    )
}
export default LandingPage