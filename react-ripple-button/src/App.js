import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import RippleButton from './components/RippleButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="block">
          <RippleButton>blank</RippleButton>
        </div>
        <div className="block">
          <RippleButton className="info">info</RippleButton>
        </div>
        <div className="block">
          <RippleButton className="error">error</RippleButton>
        </div>
        <div className="block">
          <RippleButton className="warning">warning</RippleButton>
        </div>
      </div>
    )
  }
}

export default App
