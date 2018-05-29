import React, { Component } from 'react';
import About from './components/AboutMe';
import Links from './components/Links';
import Projects from './components/List';
class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <About/>
          <Links/>
        </main>
      </div>
    );
  }
}

export default App;
