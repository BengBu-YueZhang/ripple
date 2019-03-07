import React from 'react'
import Ripple from '../Ripple'
import config from '../../config'
import PropTypes from 'prop-types'
import './index.css'

function noop () {}

class RippleButton extends React.PureComponent {
  constructor (props) {
    super(props)
    this.rippleRef = React.createRef()
  }

  handleClick = (event) => {
    this.props.onClick && this.props.onClick(event)
  }

  handleMouseDown = (event) => {
    this.props.onMouseDown && this.props.onMouseDown(event)
    this.rippleRef.current.createRipple(event)
  }

  render () {
    const { children, rippleColor, className } = this.props

    return (
      <div
        className={`ripple-button__wrapper ${className}`}
        onMouseDown={this.handleMouseDown}
        onClick={this.handleClick}
      >
        <span className="ripple-button__content">{ children }</span>
        <Ripple
          rippleColor={rippleColor}
          ref={this.rippleRef}
        />
      </div>
    )
  }
}

RippleButton.propTypes = {
  rippleColor: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

RippleButton.defaultProps = {
  rippleColor: config.color,
  onClick: noop,
  className: ''
}

export default RippleButton
