export default function validate(recipe){
    let errors = {}
    if(!recipe.name){
        errors.name = 'Name cannot be null.'
    }else if(recipe.name.length < 5 || recipe.name.length >20){
        errors.name = 'The name must be between 5 to 100 characters.'
    }
    if(!/^[a-zA-Z\s]+$/.test(recipe.name)){
        errors.name = 'Only characters from a-Z are accepted'
    }
    if(!recipe.image || !validURL(recipe.image)){
        errors.image = 'A valid Image is required'
    }
    if(!recipe.summary){
        errors.summary = 'A summary is required'
    }
    if(recipe.healthScore < 1 || recipe.healthScore > 100){
        errors.healthScore = 'The health score is 1 - 100.'
    }
    if(recipe.dish.length <= 0){
        errors.dish = 'A dish type is required'
    }
    if(recipe.steps.length <= 0){
        errors.steps = 'A steps is required'
    }
    if(recipe.diets.length <= 0){
        errors.diets = 'A diets is required'
    }

    return errors
}

function validURL(strurl){
    let validate = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!validate.test(strurl)
}