import './App.css';

import {
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Switch>
       
       <Route exact path="/">
          Home
          
       </Route>
       <Route exact path="/portafolio"> 
         portafolio
       </Route>
       <Route exact path="/products">
         products
       </Route>
       <Route exact path="/product">
         product
       </Route>
       <Route exact path="/cart">
        
       </Route>
     </Switch>
    </div>
  );
}

export default App;
