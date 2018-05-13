import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld.js'
import Timer from './Timer.js'
import TemperatureConverter from './TemperatureConverter/TemperatureConverter.js'
import ToDoApp from './ToDoApp/ToDoApp.js'

let user={name: "Sarvar", age: 32}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <HelloWorld model={user} />
        <Timer title="My timer!" />
        <TemperatureConverter />
        <ToDoApp />


        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
