import React from "react";
import Nav from "./components/Nav";
import './App.css'
import './style.css'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home1 from "./components/Home1";
import Cart from "./components/Cart";
import Details from "./components/Details";


function App() {
 
  return (
    <Router>
      <Nav />
      <Route exact path='/' component={Home1} />
      <Route  path='/cart' component={Cart}/>
      <Route path='/details/:id' component={Details}/>
    </Router>
  );
}
export default App;