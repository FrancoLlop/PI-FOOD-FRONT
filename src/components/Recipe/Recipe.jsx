import React from 'react'
import {Link} from 'react-router-dom'
import s from './Recipe2.module.css'


export default function Recipe({name, image, id, diets, healthScore, readyInMinutes}){
  
    return(
         <div className={s.Recipe}>
        <Link style={{textDecoration:'none'}} to={`/recipes/${id}`}>

                <div className={s.frente}>

                    <div className={s.RecipeName}><h1 >{name}</h1></div>
                    <div className={s.RecipeHealthScore}><p>HealthScore: {healthScore}</p></div>
                    <div><p>ReadyInMinutes: {readyInMinutes}</p></div>
                    <div className={s.RecipeDiets}><p> Diets: { typeof(diets[0]) !== 'string' ? diets.map((d)=> ' ✔ ' + d.name + ' ') : diets.map(e => ' ✔ ' + e + ' ')}</p></div>

                </div>

                <div className={s.atras}>
                   
                    <img className={s.RecipeImage} background-image='true' src={image} alt={name}/>
                    
                </div> 
        </Link>
        </div>
    )
}