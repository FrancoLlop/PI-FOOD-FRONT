import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import {getDiets, createRecipe} from '../../redux/actions/actions'
import validate from './Validate'
import './CreateRecipe.css'

export default function CreateRecipeForm(){
    const dispatch = useDispatch()
    const history = useHistory()

useEffect(()=>{
    dispatch(getDiets())
},[dispatch])

const diets = useSelector(state => state.diets)
const [errors, setErrors] = useState({})

const [recipe, setrecipe] = useState({
    name: '',
    summary: '',
    healthScore: 0,
    steps: [],
    diets: [],
    dish: [],
    image: ''
})
const [stringsAux, setStringsAux] = useState({
    dish:'',
    steps: ''
})

function handleOnChangeAux(e){
    setStringsAux({
        ...stringsAux,
        [e.target.name]:e.target.value
    })
    
}

function handlePush(e){
    setrecipe({
        ...recipe,
        [e.target.name]: recipe[e.target.name].includes(e.target.value) ? recipe[e.target.name] : [...recipe[e.target.name], e.target.value]
    })
     
    setErrors(validate({
        ...recipe,
        [e.target.name]: recipe[e.target.name].includes(e.target.value) ? recipe[e.target.name] : [...recipe[e.target.name], e.target.value]
    }))

    setStringsAux({
        ...stringsAux,
        [e.target.name]: ''
    })
}

function handleDelete(e){
    setrecipe({
        ...recipe,
        [e.target.name]: recipe[e.target.name].filter((f) => f !== e.target.id)
    })
    setErrors(validate({
        ...recipe,
        [e.target.name]: recipe[e.target.name].filter((f) => f !== e.target.id)
    }))
}

function handleOnChange(e){
    setrecipe({
        ...recipe,
        [e.target.name]:e.target.value
    })
    setErrors(validate({
        ...recipe,
        [e.target.name]: e.target.value
    }))
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(createRecipe(recipe))
    alert('Recipe created!!')
    setrecipe({
    name: '',
    summary: '',
    healthScore: 0,
    steps: [],
    diets: [],
    dish: [],
    image: ''
    })
    history.push('/home')
}

    return(
        <div className='createRecipe'>
                <Link to={'/home'}><button className='backButton'>Back</button></Link>
            <form className='Form' onSubmit={(e)=> handleSubmit(e)}>
                <div className='formName'>
                    <div className='containerInput'>Name: <input name='name' type='text' placeholder='name...' value={recipe.name} onChange={(e) => handleOnChange(e)}/></div>
                    {
                        <p className='error'>{errors.name ? errors.name : ''}</p>
                    }
                </div>
                <div className='formImage'>
                    <div className='containerInput'>Image: <input name='image' type='text' placeholder='url...' value={recipe.image} onChange={(e) => handleOnChange(e)}/></div>
                    {
                        <p className='error'>{errors.image ? errors.image : ''}</p>
                    }
                </div>
                <div className='formHealthScore'>
                    <div className='containerInput'>healthScore: <input name='healthScore' type='number' placeholder='healthScore...' value={recipe.healthScore} onChange={(e) => handleOnChange(e)}/></div>
                    {
                        <p className='error'>{errors.healthScore ? errors.healthScore : ''}</p>
                    }
                </div>
                <div className='formSummary'>
                    <div className='containerInput'>Summary: <textarea name='summary' type='text' placeholder='summary...' value={recipe.summary} onChange={(e) => handleOnChange(e)}/></div>
                    {
                        <p className='error'>{errors.summary ? errors.summary : ''}</p>
                    }
                </div>
                <div className='formDishType'>
                <div className='containerInput'>DishType: <input name='dish' type='text' placeholder='dish...' value={stringsAux.dish} onChange={(e) => handleOnChangeAux(e)}/><button className='addDish' type='button'name='dish' value={stringsAux.dish} onClick={(e) => handlePush(e)}>Add DishType</button></div>
                {
                        <p className='error'>{errors.dish ? errors.dish : ''}</p>
                    }
                <ul className='DishContainer'>{recipe.dish.map((d,i )=>
                <li key={i}>DishType {i+1}: {d}<button type='button' name='dish' id={d} onClick={(e) => handleDelete(e)}> X </button></li>
                )
                }</ul>
                </div>
                <div className='formSteps'>
                <div className='containerInput'>Steps: <input name='steps' type='text' placeholder='steps...' value={stringsAux.steps} onChange={(e) => handleOnChangeAux(e)}/><button className='addSteps' type='button'name='steps' value={stringsAux.steps} onClick={(e) => handlePush(e)}>Add steps</button></div>
                {
                        <p className='error'>{errors.steps ? errors.steps : ''}</p>
                    }
                </div>
                <ul className='StepsContainer'>
                {recipe.steps.map((d,i )=>
                <li key={i}>Step {i+1}: {d}<button type='button' name='steps' id={d} onClick={(e) => handleDelete(e)}> X </button></li>
                )
                }
                </ul>
                <div className='formDiets'>
                    <select  name='diets' onChange={(e) => handlePush(e)}>
                        {diets.map((d) =>(
                            <option key={d.id} value={d.name}>{d.name}</option>
                        ))}
                    </select>  
                    {
                        <p className='error'>{errors.diets ? errors.diets : ''}</p>
                    }
                {recipe.diets.map((d,i )=>
                <li key={i}>Diets {i+1}: {d}<button type='button' name='diets' id={d} onClick={(e) => handleDelete(e)}> X </button></li>
                )
                }
                </div>
                    {recipe.name.length < 3 || Object.keys(errors).length > 0? <button disabled className='createButton'>Create Recipe!</button>: <button type={'submit'} className='createButton'>Create Recipe!</button>}
            </form>
        </div>
    )
}