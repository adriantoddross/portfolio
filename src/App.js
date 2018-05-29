import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/AboutMe';
import Links from './components/Links';
import Projects from './components/List';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      </div>
    );
  }
}

export default App;
