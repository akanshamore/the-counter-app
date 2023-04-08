
import './App.css';
import React from 'react';


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

class App extends React.Component {

  state = { counter: 0 }

  handleAdd = () => {

    this.setState({ counter: this.state.counter + 1 })

  }

  handleSubtract = () => {

    this.setState({ counter: this.state.counter - 1 })
  }
  handleReset = () => {

    this.setState({ counter: 0 })
  }
  render() {

    const title = "The Counter App"
    return (
      <div>


        <Header title={title} />
        <Counter counter={this.state.counter} />
        <ButtonsContainer
          handleAdd={this.handleAdd} handleSubtract={this.handleSubtract} handleReset={this.handleReset} />

      </div>

    );
  }
}
export default App;
