import React from 'react'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import { getRecipeDetails } from '../../redux/actions/actions'
import Loading from '../Loading/Loading'
import './Details.css'

export default function Details(){
const dispatch = useDispatch()
const {id} = useParams()

useEffect(()=>{
    dispatch(getRecipeDetails(id))
},[dispatch,id])

let recipeDet = useSelector( state => state.recipeDetail)


    return (
        <>
        {recipeDet.diets ? 
        <div className='ContainerRecipe'>
            {recipeDet.diets ?
            <div className='RecipeDetail' key={recipeDet.id}>
                <h1 className='Detailname'>Name: {recipeDet.name}</h1>
            <div className='Detaildiets'><b>Diets: </b>

            { typeof recipeDet.diets[0] === 'object' ? recipeDet.diets?.map(d => {return(
                <h4 key={d.name}> ✔ {d.name}</h4>
            )}) : recipeDet.diets.map(e => ' ✔ ' + e + ' ')} 

            </div> 
                <div className='DetailHealthScore'><p>Healt-Score: {recipeDet.healthScore}</p>
            </div>

            <div>
                <p>ReadyInMinutes: {recipeDet.readyInMinutes}</p>
            </div>
            <div className='DetailSummary'><p>Summary: {recipeDet.summary?.replace(/<[^>]*>/g, '')}</p></div>

            <div className='DetailDish'><h2>Dish-Type: {recipeDet.dish.map(d => ' ✔ ' + d +' ')}</h2></div>

            <div className='DetailSteps'><span>Steps: </span>

                {recipeDet.steps && typeof recipeDet.steps[0] === 'object'? recipeDet.steps?.map(s => {
                    return(
                    <h5 key={s.step}>Step {s.number}: {s.step}</h5>
                )
                } ): recipeDet.steps?.map((s, i) => {
                    return(
                    <h5 key={i}>Step {i+1}: {s}</h5>
                )
                })}
            </div>

            <div className='DetailImage'><img src={recipeDet.image} alt={recipeDet.name}/></div>

            </div>:<div>Loading...</div>}
            
            <div className='DetailButton'><Link to={'/home'}><button>Back</button></Link></div>
            
        </div>
        : <Loading/>} 
        </>
    )
}