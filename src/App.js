import './App.css';
import Landing from './Components/Landing'
import {BrowserRouter as Router,
Switch,Route} from 'react-router-dom';
import Navegacion from './Components/Navegacion';
import Pie from './Components/Pie';
import Contacto from './Components/Contacto';
import About from './Components/About';
import Portafolio from './Components/Portafolio';
import Sorpresa from './Components/Sorpresa';
import {AnimatePresence,motion} from 'framer-motion';
function App() {
  document.title = "Walter Santacruz"
  const variants = {
    visible: {y:0, opacity: 1, transition:{delay:0.3,duration:0.5}},
    hidden: {y:50,opacity: 0},
  }
  return (
    <AnimatePresence>
      <Router >
          <Switch>
            <Route path="/" exact>
              <Navegacion />
              <motion.div className="App" variants={variants} animate="visible" initial="hidden">
                <Landing />
              </motion.div>
              <Pie />
            </Route>
            <Route path="/about">
              <Navegacion />
                <motion.div variants={variants} animate="visible" initial="hidden">
                  <About />
                </motion.div>
                <Pie />
            </Route>
            <Route path="/contacto">
              <Navegacion />
                <motion.div variants={variants} animate="visible" initial="hidden">
                  <Contacto />
                </motion.div>
                <Pie />
            </Route>
            <Route path="/portafolio">
              <Navegacion />
              <motion.div variants={variants} animate="visible" initial="hidden">
                <Portafolio></Portafolio>
              </motion.div>
              
              <Pie />
            </Route>
            <Route path="/nsfw">
              <motion.div variants={variants} animate="visible" initial="hidden">
                <Sorpresa></Sorpresa>
              </motion.div>
              
            </Route>
            <Route path="*">
              <div className="wrp" >
              <p className="blanco grande">404</p>
              <p className="blanco mediano font-weight-light">Aqui no hay nada :(</p>
              </div>
            </Route>
          </Switch>

      </Router>
    </AnimatePresence>

  );
}

export default App;
