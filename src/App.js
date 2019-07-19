import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";

class App extends Component {

  state = {
    currentUser: {}
  }

  login = ({ username, password }) => {
    console.log(`Logging in ${username} with password ${password}`);
    this.setState({
      currentUser: {name: username}
    })
  };

  render() {
    return (
      <div>

        <h1>
          <pre>LoginForm</pre>
        </h1>
        <LoginForm handleLogin={this.login} />

        {
          this.state.currentUser.name ? (
          <div>
            <h1>
              <pre>TwitterMessage</pre>
            </h1>
            <TwitterMessage maxChars={140} />
          </div>
          ) : (
            <h4>please login!</h4>
          )
        }
      </div>
    )
  }
}

export default App
