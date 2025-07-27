import React, { Component } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
    this.sayHello();
  };

  sayHello = () => {
    alert('Hello! This is a static message.');
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handlePress = (event) => {
    alert('I was clicked');
    console.log(event); // Synthetic event object
  };

  render() {
    return (
      <div style={{ padding: 20 }}>
        <h1>React Event Handling</h1>

        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />
        <button onClick={() => this.sayWelcome('Welcome')}>Say Welcome</button>

        <br /><br />
        <button onClick={this.handlePress}>Synthetic Event</button>

        <br /><br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
