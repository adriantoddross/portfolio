import React, { Component } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Portfolio/>
      </div>
    );
  }
}

export default App;
