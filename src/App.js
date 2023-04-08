
import './App.css';
import React from 'react';


const Header = (props) => {
  console.log("props are", props);
  return (

    <div>

      <h1> {props.title}</h1>
    </div>
  )
}


class Header1 extends React.Component {

  render() {

    return (

      <div>

        <h1> {this.props.title}</h1>
      </div>
    );
  }
}

class Counter extends React.Component {

  render() {

    return (


      <div>

        <h1>{this.props.counter}</h1>

      </div>
    );
  }
}


class ButtonsContainer extends React.Component {

  render() {

    return (


      <div>

        <button onClick={this.props.handleAdd}>+</button>
        <button onClick={this.props.handleSubtract}>-</button>
        <button onClick={this.props.handleReset}>Reset</button>

      </div>
    );
  }
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
