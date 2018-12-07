import React, { Component } from 'react'
import Header from './Components/Header'
import SnackList from './Components/SnackList'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="row">
          <SnackList />
        </div>
      </div>
    );
  }
}

export default App;
