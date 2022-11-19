import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { getRecipeByName, clearRecipes} from '../../redux/actions/actions'
import './SearchBar.css'
import {FaSearch} from "react-icons/fa"

export default function SearchBar({setPage}){
const dispatch = useDispatch()
const [search, setSearch] = useState("")

function handleOnChange(e){
    e.preventDefault()
    setSearch(e.target.value)
}

function handleOnSubmit(e){
    e.preventDefault()
    dispatch(clearRecipes())
    dispatch(getRecipeByName(search))
    setSearch("")
    setPage(0)
}

    return(
        <div className='searchBar' >

            <form onSubmit={(e) => handleOnSubmit(e)}>

            <input className='input' type='text' value={search} placeholder='Search recipe by name...' onChange={(e) => handleOnChange(e)}></input>
            
            <button className='submit' type='submit'>{<FaSearch className='search'/>}</button>

            </form>
        </div>
    )
}