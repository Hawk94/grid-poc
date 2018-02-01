import './../tiles'
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Topbar">
          <h1>Welcome to Colab</h1>
        </header>
        <div className="container">
          <div className="Tiles">
            <div className="Tile orange" />
            <div className="Tile blue" />
            <div className="Tile pink" />
            <div className="Tile green" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
