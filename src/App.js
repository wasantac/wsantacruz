import './App.css';
import Landing from './Components/Landing'
import {BrowserRouter as Router,
Switch,Route} from 'react-router-dom';
import Navegacion from './Components/Navegacion';
import Loader from './Components/Loader';
import Pie from './Components/Pie';
import Contacto from './Components/Contacto';
import About from './Components/About';
import Portafolio from './Components/Portafolio';
import Sorpresa from './Components/Sorpresa';
function App() {
  document.title = "Walter Santacruz"
  
  return (
    <Router >
      <div>
       <Loader />
        
        <Switch>
          <Route path="/" exact>
          <Navegacion />
            <div className="App">
              <Landing />
            </div>
            <Pie />
          </Route>
          <Route path="/about">
          <Navegacion />
            <div>
              <About />
            </div>
            <Pie />
          </Route>
          <Route path="/contacto">
          <Navegacion />
            <div>
              <Contacto />
            </div>
            <Pie />
          </Route>
          <Route path="/portafolio">
          <Navegacion />
            <Portafolio></Portafolio>
            <Pie />
          </Route>
          <Route path="/nsfw">
            <Sorpresa></Sorpresa>
          </Route>
        </Switch>
        
      </div>
    </Router>

  );
}

export default App;
