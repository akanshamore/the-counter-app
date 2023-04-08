
import './App.css';
import React, { useEffect, useState } from 'react';


const NavBar = () => {

  return (

    <div className='navContainer'>

      <h1> The Counter App</h1>
    </div>
  );
}




const Counter = (props) => {

  return (

    <div className='counterContainer'>

      <h1>{props.counter}</h1>

    </div>
  );
}



const ButtonsContainer = (props) => {



  return (


    <div className='buttonContainer'>

      <button onClick={props.handleAdd} className='buttonStyle'>+</button>
      <button onClick={props.handleSubtract} className='buttonStyle'>-</button>
      <button onClick={props.handleReset} className='buttonStyle'>Reset</button>

    </div>
  );
}




const App = () => {


  const [counter, setCounter] = useState(0)
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

    <div className='appContainer'>
      <NavBar />
      <Counter counter={counter} />
      <ButtonsContainer handleAdd={handleAdd} handleSubtract={handleSubtract} handleReset={handleReset} />

      <footer className='footerContainer'>
        © 2023 Akansha More
      </footer>
    </div>
  )
}

export default App;
