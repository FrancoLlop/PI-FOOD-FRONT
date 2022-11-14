import  {GET_DIETS,GET_RECIPES,GET_RECIPE_BY_NAME,GET_RECIPE_DETAILS,CREATE_RECIPE,CLEAR_DETAIL,ORDER_BY_HEALT_SCORE,ORDER_BY_ALPHABET,FILTER_BY_DIET, REFRESH, CLEAR_RECIPES}  from '../actions/actions'

const intialState = {
    allRecipes: [],
    recipes: [],
    diets: [],
    recipeDetail: {}
}

export default function rootReducer(state = intialState, action){
    switch(action.type){
        case GET_RECIPES:
            return{
                ...state,
                allRecipes: action.payload,
                recipes: action.payload
            }
        case GET_DIETS:
            return{
                ...state,
                diets: action.payload
            }
        case GET_RECIPE_BY_NAME:
            if(typeof action.payload !== 'object') alert(action.payload)
            let found = typeof action.payload === 'object'? action.payload : state.allRecipes 
            return{
                ...state,
                recipes: found
            }
        case GET_RECIPE_DETAILS:
            return{
                ...state,
                recipeDetail: action.payload
            }
        case CREATE_RECIPE:
            return{
                ...state
            }
        case FILTER_BY_DIET:
            const recipes = state.allRecipes
            let recipesFiltered = action.payload === 'all' ? recipes : recipes.filter(r => r.diets.find(d => d.name === action.payload || d === action.payload))
            if(recipesFiltered.length <= 0 ) alert('Recipes not found')
            recipesFiltered =  recipesFiltered.length > 0 ? recipesFiltered : state.allRecipes
            return{
                ...state,
                recipes: recipesFiltered
            }
        case ORDER_BY_ALPHABET:
            let recipesByAlphabet = [...state.recipes]
            recipesByAlphabet = action.payload === 'A-Z' ? 
            state.recipes.sort( function (a,b) {
                if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                return 0
            }):
            state.recipes.sort( function (a,b) {
                if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                return 0
            })
            return{
                ...state,
                recipes: recipesByAlphabet
            }
        case ORDER_BY_HEALT_SCORE:
            let orderByHealthScore = [...state.recipes]
            orderByHealthScore = action.payload === 'Ascendent' ?
            state.recipes.sort(function (a,b){
                if(a.healthScore > b.healthScore) return 1;
                if(a.healthScore < b.healthScore) return -1;
                return 0;
            }):
            state.recipes.sort(function (a,b){
                if(a.healthScore < b.healthScore) return 1;
                if(a.healthScore > b.healthScore) return -1;
                return 0;
            })
            return{
                ...state,
                recipes: orderByHealthScore
            }
        case CLEAR_DETAIL:
            return{
                ...state,
                recipeDetail: {}
            }
        case REFRESH:
            return{
                ...state,
                recipes: state.allRecipes
            }
        case CLEAR_RECIPES:{
            return{
                ...state,
                recipes: []
            }
        }
        default: 
        return state
    }
}