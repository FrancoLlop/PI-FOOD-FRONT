import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { filterByDiet, orderByAlphabet, orderByHealtScore, clearRecipes} from '../../redux/actions/actions';
import './Filters.css'


export default function Filters({setPage, setReload}){
    const dispatch = useDispatch()
    const diets = useSelector(state => state.diets)
    const [aux , setAux] = useState({
        diet: '',
        alpha: '',
        healthScore: ''
    })

function handleFilterByDiet(e){
    e.preventDefault()
    dispatch(clearRecipes())
    dispatch(filterByDiet(e.target.value))

    setAux({
        ...aux,
        diet:e.target.value
    })
    e.target.value = 'Filter Diet'
    setPage(0)
}

function handleOrderByAlphabet(e){
    e.preventDefault()

    dispatch(orderByAlphabet(e.target.value))

    setAux({
        ...aux,
        alpha:e.target.value
    })

    e.target.value = 'Order Alph'

    setReload([])

    setPage(0)
}

function handleOrderByHealtScore(e){
    e.preventDefault()

    dispatch(orderByHealtScore(e.target.value))

    setAux({
        ...aux,
        healthScore:e.target.value
    })

    e.target.value = 'HealthScore'

    setReload([])

    setPage(0)
}
    return(
        <div className='filters'>
            <div className='filterDiet'>
            <label>Filter by Diet: </label>

                <select className='filterDietSelect' name="diets" onChange={(e) => handleFilterByDiet(e)}>
                        <optgroup label='Filter Diet'>
                        <option hidden value={'Filter Diet'}>{aux.diet || 'Filter Diet'}</option>
                        {diets.map(d =>(
                            <option key={d.id} value={d.name}>{d.name}</option>
                        ))}
                        </optgroup>
                </select>
                
            </div>

            <div className='orderAlphabet'>
            <label>Order by Alphabetical: </label>

                <select className='orderAlphabetSelect' name={'alphabetical'} onChange={(e) => handleOrderByAlphabet(e)}>
                    <optgroup label='Order Alph'>
                        <option hidden value={'Order Alph'}>{aux.alpha || 'Order Alph'}</option>
                        <option value={'A-Z'}>A-Z</option>
                        <option value={'Z-A'}>Z-A</option>
                        </optgroup>
                </select>

            </div>

            <div className='orderHealtScore'>
                <label>Order by HealtScore: </label>

                <select className='orderHealtScoreSelect' name={'healthScore'} onChange={(e) => handleOrderByHealtScore(e)}>
                        <optgroup label='Order'>
                        <option hidden value={'HealthScore'}>{aux.healthScore || 'HealthScore'}</option>
                        <option value={'Ascendent'}>Ascendent</option>
                        <option value={'Descendent'}>Descendent</option>
                        </optgroup>
                </select>

            </div>
        </div>
    )
}