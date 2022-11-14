import React from 'react'
import './Loading.css'
import loadinglogo from './loadinglogo.gif'

export default function Loading(){
    return(
        <div className='loading'>
            <div className='loadinglogo'>
            <img  src={loadinglogo} alt='loading'/>
            </div>
        </div>
    )
}