import React, { Component } from 'react'
import Header from './Components/Header'
import SnackList from './Components/SnackList'
import Footer from './Components/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="row">
          <SnackList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
