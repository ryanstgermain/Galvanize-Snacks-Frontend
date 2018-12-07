import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card.js'
import Modal from './Components/Modal.js'

class App extends Component {
  constructor () {
    super () 
      this.state = {
        snacks: [],
        indSnack: [{
          "name":"Pork - Caul Fat",
          "description":"Mauris lacinia sapien quis libero.","is_perishable": true,
          "price":"8.44","img":"https://images.unsplash.com/photo-1459663148042-6d8cb9340411?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=44153beb9e2d61c2970e93f8d72a862e",
          "reviews": "Yay for Pork!"
        }],
        showModal: true,
      }
    } 

  hideModal = () => {
    this.setState({ showModal: false})
  }

  render() {
    return (
      <div className="App">
      <Card indSnack= {this.state.indSnack}/>
      <Modal hideModal= {this.hideModal} showModal= {this.state.showModal}/>
      </div>
    );
  }
}

export default App;
