import {Route} from 'react-router-dom'
import Home from './components/Home/Home'
import LandingPage from './components/LandingPage/LandingPage';
import Details from './components/Details/Details'
import CreateRecipeForm from './components/CreateRecipe/CreateRecipe'
import './App.css';

function App() {
  return (
    <div className="App">
          <Route exact path={'/'} component={LandingPage}/>
          <Route path={'/home'} component={Home}/>
          <Route path={'/recipes/:id'} component={Details}/>
          <Route path={'/createRecipe'} component={CreateRecipeForm}/>
    </div>
  );
}

export default App;
