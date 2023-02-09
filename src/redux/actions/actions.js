import axios from 'axios'

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE_BY_NAME = 'GET_RECIPE_BY_NAME';
export const GET_RECIPE_DETAILS = 'GET_RECIPE_DETAILS';
export const GET_DIETS = 'GET_DIETS';
export const CREATE_RECIPE = 'CREATE_RECIPE';
export const FILTER_BY_DIET = 'FILTER_BY_DIET';
export const ORDER_BY_ALPHABET = 'ORDER_BY_ALPHABET';
export const ORDER_BY_HEALT_SCORE = 'ORDER_BY_HEALT_SCORE';
export const CLEAR_DETAIL = 'CLEAR_DETAIL';
export const REFRESH = 'REFRESH'
export const CLEAR_RECIPES = 'CLEAR_RECIPES'



export function getRecipes(){
    return async function(dispatch){
        try {
            const recipes = await axios.get('/recipes')
            // console.log(recipes)
            return dispatch({
                type: GET_RECIPES,
                payload: recipes.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getDiets(){
    return async function(dispatch){
        try {
            const diets = await axios.get('/diets')
            return dispatch({
                type: GET_DIETS,
                payload: diets.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getRecipeByName(name){
    return async function(dispatch){
        try {
            const recipeByName = await axios.get(`/recipes?name=${name}`)
            return dispatch({
                type: GET_RECIPE_BY_NAME,
                payload: recipeByName.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

// export function getRecipeByName(name){
//     return function(dispatch){
//         return fetch(`http://localhost:3001/recipes?name=${name}`)
//         .then(result => result.json())
//         .then(res => dispatch({type: GET_RECIPE_BY_NAME, payload: res}))
//         .catch(error => console.log('Error: ', error))
//     }
// }




export function getRecipeDetails(id){
    return async function(dispatch){
        try {
            const recipeDetails = await axios.get(`/recipes/${id}`)
            // console.log(recipeDetails)
            return dispatch({
                type: GET_RECIPE_DETAILS,
                payload: recipeDetails.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function createRecipe(recipe){
    return async function(dispatch){
        try {
            await axios.post(`/recipes`, recipe)
            return dispatch({
                type: CREATE_RECIPE
            })
        } catch (error) {
            console.log(error)
        }
    }
}


export function filterByDiet(payload){
    return{
        type: FILTER_BY_DIET,
        payload
    }
}

export function orderByAlphabet(payload){
    return{
        type: ORDER_BY_ALPHABET,
        payload
    }
}

export function orderByHealtScore(payload){
    return{
        type: ORDER_BY_HEALT_SCORE,
        payload
    }
}

export function clearDetail(){
    return{
        type: CLEAR_DETAIL
    }
}

export function refresh(){
    return{
        type: REFRESH
    }
}

export function clearRecipes(){
    return{
        type: CLEAR_RECIPES
    }
}