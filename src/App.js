
import './App.css';
import React, { useEffect, useState } from 'react';


const Header = (props) => {

  return (

    <div>

      <h1> {props.title}</h1>
    </div>
  );
}




const Counter = (props) => {

  return (

    <div>

      <h1>{props.counter}</h1>

    </div>
  );
}



const ButtonsContainer = (props) => {



  return (


    <div>

      <button onClick={props.handleAdd}>+</button>
      <button onClick={props.handleSubtract}>-</button>
      <button onClick={props.handleReset}>Reset</button>

    </div>
  );
}




const App = () => {


  const [counter, setCounter] = useState(0)
  const title = "The Counter App"
  const handleAdd = () => {
    setCounter(counter + 1)
  }



  const handleSubtract = () => {
    setCounter(counter - 1)
  }
  const handleReset = () => {

    setCounter(0)
  }
  return (

    <div>
      <Header title={title} />
      <Counter counter={counter} />
      <ButtonsContainer handleAdd={handleAdd} handleSubtract={handleSubtract} handleReset={handleReset} />

    </div>
  )
}

export default App;
