import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getRecipes, getDiets, clearDetail, refresh} from '../../redux/actions/actions'
import {Link} from 'react-router-dom'
import { useEffect , useState} from 'react'
import Pagination from '../Pagination/Pagination'
import SearchBar from '../SearchBar/SearchBar'
import Filters from '../Filters/Filters'
import Recipe from '../Recipe/Recipe'
import './Home.css'
import Loading from '../Loading/Loading'


export default function Home(){

const dispatch = useDispatch()


useEffect(()=> {
    dispatch(getRecipes())
    dispatch(getDiets())
    dispatch(clearDetail())
}, [dispatch])

const [pages, setPages] = useState([])
const [page, setPage] = useState(0)
const [reload, setReload] = useState([])

const recipes = useSelector(state => state.recipes)

function paginated(pageNumber){
    setPage(pageNumber)
}

function handleRefresh(){
    dispatch(refresh())
}


useEffect(()=>{
    let aux = []
    let pages = []
    for (let i = 0; i < recipes.length; i++) {
        if(aux.length < 9){
           aux.push(recipes[i])
        }
        if(i === recipes.length -1 || aux.length === 9){
            pages.push(aux)
            aux = []
        }
    }
    setPages(pages)
},[reload,recipes])

    return(
        <>
        {pages.length > 0 ? <div className='home'>
               
        <button className='refresh' id={'refresh'} type='button' onClick={(e) => handleRefresh(e)}>Refresh</button>
        <SearchBar setPage={setPage}/>

        <Filters setReload={setReload} setPage={setPage}/>

        <div className='createContainer'>
            <Link  to={'/createRecipe'}><button className='create'>Create recipe</button></Link>
        </div>

        <div className='Pagination'>
            <Pagination page={page} setPage={setPage} pages={pages} paginated={paginated}/>    
        </div>
          
        <div className='ContainerRecipes'>
        {pages && pages[page]?.map(rec => {
            return(
                <div key={rec.name}>
                    <Recipe summary={rec.summary} diets={rec.diets} name={rec.name} image={rec.image} id={rec.id} healthScore={rec.healthScore} readyInMinutes={rec.readyInMinutes}/>          
                </div>
            )
        }) }
        </div>
    </div> : <Loading/>}</>
    )
}