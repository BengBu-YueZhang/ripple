import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import RippleButton from './components/RippleButton'
import withRipple from './components/WithRipple'

const WithBlock = withRipple(
  (
    <div className="content">
      <h2>React</h2>
      <h5>A JavaScript library for building user interfaces</h5>
    </div>
  )
)

class App extends Component {
  render() {
    const codeFragment1 = `
      <RippleButton>blank</RippleButton>

      <RippleButton className="info">info</RippleButton>

      <RippleButton className="error">error</RippleButton>

      <RippleButton className="warning">warning</RippleButton>
    `

    const codeFragment2 = `
      import withRipple from './components/WithRipple'

      const WithBlock = withRipple(
        (
          <div className="content">
            <h2>React</h2>
            <h5>A JavaScript library for building user interfaces</h5>
          </div>
        )
      )
      
      class Test extends React.Components {
        render () {
          return <WithBlock/>
        }
      }
    `

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Ripple</h1>
        <h2>RippleButton Component</h2>
        <h4>How to use</h4>
        <pre className="code">
          <code>
            {codeFragment1}
          </code>
        </pre>
        <h4>Preview</h4>
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
        <h2>WithRipple HOC</h2>
        <h4>How to use</h4>
        <pre className="code">
          <code>
            {codeFragment2}
          </code>
        </pre>
        <h4>Preview</h4>
        <WithBlock/>
      </div>
    )
  }
}

export default App
