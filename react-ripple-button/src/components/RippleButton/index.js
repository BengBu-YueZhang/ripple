import React from 'react'
import Ripple from '../Ripple'

export default class RippleButton extends React.PureComponent {
  constructor (props) {
    super(props)
    this.rippleRef = React.createRef()
  }

  handleClick = (event) => {
    this.props.onClick && this.props.onClick(event)
  }

  handleMouseUp = (event) => {
    this.props.onMouseUp && this.props.onMouseUp(event)
  }

  handleMouseDown = (event) => {
    this.props.onMouseDown && this.props.onMouseDown(event)
    this.rippleRef.current.createRipple(event)
  }

  render () {
    const { children, rippleColor } = this.props

    return (
      <div
        onMouseDown={this.handleMouseDown}
        onMouseDown={this.handleMouseUp}
        onClick={this.handleClick}
      >
        <span>{ children }</span>
        <Ripple
          rippleColor={rippleColor}
          ref={this.rippleRef}
        />
      </div>
    )
  }
}
