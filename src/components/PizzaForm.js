import React, { useState } from "react";
import axios from "axios";

const toppings = ["cheese", "meatlovers", "pepperoni", "sausage"];
const pizzaSizes = ["small", "medium", "large"];

const PizzaForm = () => {
  const [pizzaDetails, setPizzaDetails] = useState({
    "name-input": "",
    "size-dropdown" : "",
    toppings: [],
    "special-text": "",
  });

  function handleNameUpdate(event){
    setPizzaDetails({
        ...pizzaDetails,
        [event.target.id]: event.target.value
    })
  }

  function handleCustomUpdate(event){
    setPizzaDetails({
      ...pizzaDetails,
      [event.target.id]: event.target.value
  })
  }

  function handleToppings(topping){

    let updatedToppings;

    if(pizzaDetails.toppings.includes(topping)){
        updatedToppings = pizzaDetails.toppings.filter(t => t !==topping)
    } else {
        updatedToppings = [...pizzaDetails.toppings, topping]
    }
        console.log(topping)
        setPizzaDetails({
            ...pizzaDetails,
            toppings: updatedToppings
        })
  }
  
  function handleSizeChange(event){
    setPizzaDetails({
      ...pizzaDetails,
      [event.target.id]: event.target.value
  })
  }

  function submitForm(e){
    e.preventDefault();
    let dataObj = {
        ...pizzaDetails,

    }
    for (const top of toppings) {
       dataObj[top] = dataObj.toppings.includes(top)
    }
    delete dataObj.toppings;
    console.log(dataObj)
    
    axios.post('https://reqres.in/api/orders', dataObj)
    .then(res => {
      console.log(res.data);
    })
  }

  return (
    <div>
      {" "}
      Pizza Form
      <form id="pizza-form" onSubmit={submitForm}>
        Your Name
        <br />
        <input id="name-input" value={pizzaDetails['name-input']} onChange={handleNameUpdate} />
        <br />
       {pizzaDetails['name-input'].length < 2 ? <small style={{ color: "red" }}>
       name must be at least 2 characters
        </small> : null}
        <br />
        Select your size:
        <br />
        <select id="size-dropdown" value={pizzaDetails['size-dropdown']} onChange={handleSizeChange}>
          {pizzaSizes.map((ps) => (
            <option key={ps} value={ps}>{ps}</option>
          ))}
        </select>
        <br />
        {toppings.map((t) => (
           <span key={t}>  
           <input checked={pizzaDetails.toppings.includes(t)} onChange={()=>handleToppings(t)} type="checkbox" id={t} name={t}/>
           <label htmlFor={t}>{t}</label>
            </span>
          ))}
      
        <br />
        Custom
        <input id="special-text"  value={pizzaDetails['special-text']} onChange={handleCustomUpdate} />


        <br />
        <button type="submit" id="order-button">Add to Order</button>
      </form>
    </div>
  );
};

export default PizzaForm;
