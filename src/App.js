import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
function App() {
  return (
    <div className="App">
     <Switch>
       
       <Route exact path="/">
        <Home/>
          
       </Route>
       <Route exact path="/portafolio"> 
         portafolio
       </Route>
       <Route exact path="/about">
         About Me 
       </Route>
       <Route exact path="/contact">
        Contact
       </Route>
       
     </Switch>
    </div>
  );
}

export default App;
