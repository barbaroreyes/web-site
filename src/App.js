import {useState,useEffect} from 'react'
import {Switch,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/login">
         Login
       </Route>
       <Route exact path="/">
          Home
          all Categories 
       </Route>
       <Route exact path="/categoria"> 
         Categoria
       </Route>
       <Route exact path="/products">
         products
       </Route>
       <Route exact path="/product">
         product
       </Route>
       <Route exact path="/cart">
         cart
       </Route>
     </Switch>
    </div>
  );
}

export default App;
