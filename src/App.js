import React from "react";
import { Route , Switch, Redirect, useHistory} from "react-router-dom";
import { Link} from "react-router-dom";

import PizzaForm from './components/PizzaForm'

const Homepage = () => {
  return <div> im homepage </div>;
};

// ✕ Homepage at "/" route, has link or button with #order-pizza (31 ms)
//     ✕ From homepage "/" route, click #order-pizza, navigate to "/pizza" route (3 ms)
//     ✕ The "/pizza" route has a form with #pizza-form (11 ms)
//     ✕ Form has name text input with #name-input (5 ms)
//     ✕ Form has validation for #name-input with error message "name must be at least 2 characters" (17 ms)
//     ✕ Form has pizza size dropdown with #size-dropdown (10 ms)
//     ✕ Form has toppings checklist with at least 4 options (14 ms)
//     ✕ Form has special instructions input with #special-text (6 ms)
//     ✕ Fill out #pizza-form, submit #pizza-form with data to https://reqres.in/api/orders (5 ms)

const App = () => {
  const history = useHistory()
  function to(location){
    history.push(location)
  }
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      

      {/* <nav>
        <ul>
          <li>
            <Link to="/">
              Homepage</Link>
          </li>
          <li>
            <Link to="/pizza" >
              <button id="order-pizza">
                Pizza
                </button></Link>
          </li>
          
        </ul>
      </nav> */}
      <button onClick={()=>{to('/')}}> HP </button>
      <button id="order-pizza" onClick={()=>{to('/pizza')}}> PizzaFORM </button>
      
        <Route path="/"><Homepage/></Route> 
        <Route path="/pizza"><PizzaForm/></Route> 
        {/* <Redirect from="*" to="/" /> */}
    

      {/* <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/pizza" element={<PizzaForm />} />
        <Route path="*" element={<Homepage />} />
      </Routes> */}
    </>
  );
};

export default App;
