import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {ChatContainer} from './container/ChatContainer'
import ChatContainer from './container/ChatContainer'
import styles from './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className={styles.content}>
          <ChatContainer />
        </div>
      </div>
    );
  }
}

export default App;
