import React, { Component } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let page;
    if (this.state.isLoggedIn) {
      page = <UserPage onLogout={this.handleLogout} />;
    } else {
      page = <GuestPage onLogin={this.handleLogin} />;
    }

    return (
      <div style={{ padding: 20 }}>
        <h1>Ticket Booking App</h1>
        {page}
      </div>
    );
  }
}

export default App;
