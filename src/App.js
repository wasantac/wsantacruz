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
function App() {
  document.title = "Walter Santacruz"
  
  return (
    <Router >
      <div>
       <Loader />
        <Navegacion />
        <Switch>
          <Route path="/" exact>
            <div className="App">
              <Landing />
            </div>
          </Route>
          <Route path="/about">
            <div>
              <About />
            </div>
          </Route>
          <Route path="/contacto">
            <div>
              <Contacto />
            </div>
          </Route>
          <Route path="/portafolio">
            <Portafolio></Portafolio>
          </Route>
        </Switch>
        <Pie />
      </div>
    </Router>

  );
}

export default App;
